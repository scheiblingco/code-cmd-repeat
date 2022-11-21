import * as vscode from 'vscode';
const PREFIX = 'code-cmd-repeat.';

function getRepeatCommand(nth: number = 0) {
    let repeatCmd = vscode.workspace.getConfiguration('code-cmd-repeat').get('repetitionCommand', '!!');

    if (nth > 0) {
        repeatCmd = vscode.workspace.getConfiguration('code-cmd-repeat').get('repetitionCommandNth', '!-[num]').replace('[num]', nth.toString());
    }

    return repeatCmd.split('[enter]');
}

export function repeatLastCommand(num: number = 0) {
    if (vscode.window.activeTerminal) {
        getRepeatCommand(num).forEach(cmd => {
            vscode.window.activeTerminal?.sendText(cmd);
        });
    }
    else {
      console.log("No active terminal found");
    }
}

export function saveAndRepeatLastCommand() {
    vscode.commands.executeCommand("workbench.action.files.save");
    if (vscode.window.activeTerminal) {
        return repeatLastCommand();
    }
    else {
      console.log("No active terminal found");
    }
}

export function sudoRepeatLastCommand(num: number = 0) {
    if (vscode.window.activeTerminal) {
        getRepeatCommand(num).forEach(cmd => {
            vscode.window.activeTerminal?.sendText([
                vscode.workspace.getConfiguration('code-cmd-repeat').get('sudoCommand', 'sudo'),
                cmd
            ].join(' '));
        });
    }
    else {
      console.log("No active terminal found");
    }
}

export function clearAndRepeatLastCommand() {
    
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal?.sendText(vscode.workspace.getConfiguration('code-cmd-repeat').get('clearTerminalCommand', 'clear -x'));
        return repeatLastCommand(2);
    }
    else {
        console.log("No active terminal found");
    }
}

export function clearAndSudoRepeatLastCommand() {
    if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal?.sendText(vscode.workspace.getConfiguration('code-cmd-repeat').get('clearTerminalCommand', 'clear -x'));
        return sudoRepeatLastCommand(2);
    }
    else {
        console.log("No active terminal found");
    }
}

export function stopCurrentCommand() {
    if (vscode.window.activeTerminal) {
        return vscode.commands.executeCommand('workbench.action.terminal.sendSequence', {"text": "\u0003"});
    }
    else {
        console.log("No active terminal found");
        return false;
    }
}

export function restartCurrentCommand() {
    if (stopCurrentCommand()) {
        setTimeout(() => {
            repeatLastCommand();
        }, 2000);
    }
}

export function activate(context: vscode.ExtensionContext) {
    console.log("Installing code-cmd-repeat extensions");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'saveAndRepeatLastCommand', saveAndRepeatLastCommand)
    );
    console.log("Registered saveAndRepeatLastCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'repeatLastCommand', repeatLastCommand)
    );
    console.log("Registered repeatLastCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'sudoRepeatLastCommand', sudoRepeatLastCommand)
    );
    console.log("Registered sudoRepeatLastCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'clearAndRepeatLastCommand', clearAndRepeatLastCommand)
    );
    console.log("Registered clearAndRepeatLastCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'clearAndSudoRepeatLastCommand', clearAndSudoRepeatLastCommand)
    );
    console.log("Registered clearAndSudoRepeatLastCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'stopCurrentCommand', stopCurrentCommand)
    );
    console.log("Registered stopCurrentCommand");
    context.subscriptions.push(
        vscode.commands.registerCommand(PREFIX+'restartCurrentCommand', restartCurrentCommand)
    );
    console.log("Registered restartCurrentCommand");
    console.log("Finished registering and pushing commands");
}

export function deactivate() {}
