import {
	dtoFileExtensions,
	generateEnum,
	generateMocks,
	generateModel,
	generateSpecs,
	getFileDetails,
	StringValue
} from 'dto-to-model';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const fromStringEnum = vscode.commands.registerCommand('fromstringenum', (path: vscode.Uri) => {
		const fsPath = path?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath!;
		try{
			generateEnum(fsPath);
			vscode.window.showInformationMessage('Enum created !');
			vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");
		}catch(err){
			vscode.window.showInformationMessage((err as Error).name + ': ' + (err as Error).message);
		}
	});

	const fromDtotoModel = vscode.commands.registerCommand('fromdtotomodel', (path: vscode.Uri) => {
		const fsPath = path?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath!;
		try{
			generateModel(fsPath);
			vscode.window.showInformationMessage('Model created !');
			vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");
		}catch(err){
			vscode.window.showInformationMessage((err as Error).name + ': ' + (err as Error).message);
		}
	});

	const fromDtoToSpec = vscode.commands.registerCommand('fromdtotospec', (path: vscode.Uri) => {
		const fsPath = path?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath!;
		try{
			generateSpecs(fsPath);
			vscode.window.showInformationMessage('Specs created !');
			vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");
		}catch(err){
			vscode.window.showInformationMessage((err as Error).name + ': ' + (err as Error).message);
		}
	});

	const fromDtoToMock = vscode.commands.registerCommand('fromdtotomock', (path: vscode.Uri) => {
		const fsPath = path?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath!;
		try{
			generateMocks(fsPath);
			vscode.window.showInformationMessage('Mocks created !');
			vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");
		}catch(err){
			vscode.window.showInformationMessage((err as Error).name + ': ' + (err as Error).message);
		}
	});

	const createAllFilesFromDto = vscode.commands.registerCommand('createallfilesfromdto', (...args) => {
		const path = args[0];
		const fsPath = path?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath!;
		const fileDetails = getFileDetails(fsPath);
		try {
			if(fileDetails.fileName.includes(StringValue.ENUM.toLowerCase())){
				generateEnum(fsPath);
				vscode.window.showInformationMessage('Enum created !');
			} else if (dtoFileExtensions.some((x:string) => fileDetails.fileName.endsWith(x))){
				generateModel(fsPath);
				generateSpecs(fsPath);
				generateMocks(fsPath);
				vscode.window.showInformationMessage('Files created !');
			} else {
				throw new Error('This file isn\'t a valid Dto!');
			}
		} catch(err){
			vscode.window.showInformationMessage((err as Error).name + ': ' + (err as Error).message);
		}
		vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");
	});	
	context.subscriptions.concat([fromStringEnum, fromDtoToMock, createAllFilesFromDto, fromDtotoModel, fromDtoToSpec]);
}

export function deactivate() {}