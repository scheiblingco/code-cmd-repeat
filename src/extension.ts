"use strict";
import * as vscode from "vscode";

export function saveAndRepeatLastCommand() {
    vscode.commands.executeCommand("workbench.action.files.save");
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText('!!');
    }
    else {
      console.log("No active terminal found")
    }
}
export function repeatLastCommand() {
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText('!!');
    }
    else {
      console.log("No active terminal found")
    }
}

export function sudoRepeatLastCommand() {
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText('sudo !!');
    }
    else {
      console.log("No active terminal found")
    }
}

export function clearAndRepeatLastCommand() {
    
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText('clear -x && !-2');
    }
    else {
        console.log("No active terminal found")
    }
}

export function clearAndSudoRepeatLastCommand() {
    
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText('clear -x && sudo !-2');
    }
    else {
        console.log("No active terminal found")
    }
}

export function activate(context: vscode.ExtensionContext) {
  let nule = vscode.commands.registerCommand('extension.saveAndRepeatLastCommand', saveAndRepeatLastCommand);
  context.subscriptions.push(nule)
  nule = vscode.commands.registerCommand('extension.repeatLastCommand', repeatLastCommand);
  context.subscriptions.push(nule)
  nule = vscode.commands.registerCommand('extension.sudoRepeatLastCommand', sudoRepeatLastCommand);
  context.subscriptions.push(nule)
  nule = vscode.commands.registerCommand('extension.clearAndRepeatLastCommand', clearAndRepeatLastCommand);
  context.subscriptions.push(nule)
  nule = vscode.commands.registerCommand('extension.clearAndSudoRepeatLastCommand', clearAndSudoRepeatLastCommand);
  context.subscriptions.push(nule)
}

export function deactivate() {}
