# Repeat Last Command
## Description and Usage
Shortcuts to repeat the last commands run in a terminal, whether the focus is on the terminal or not.
Default shortcuts are:
- Ctrl + R, Ctrl + R: Save active file and repeat last command (!!)
- Ctrl + R, Ctrl + E: Only repeat last command in terminal (!!)
- Ctrl + R, Ctrl + S: Sudo Repeat last command in terminal (sudo !!)
- Ctrl + R, Ctrl + C: Clear terminal and repeat last command in terminal (clear -x && !-2)
- Ctrl + R, Ctrl + X: Clear terminal and sudo repeat last command in terminal (clear -x && sudo !-2)
- Ctrl + R, Ctrl + A: Abort/cancel current command (Ctrl+C)
- Ctrl + R, Ctrl + Q: Abort and restart current command (Ctrl + C && !!)

You can change the shortcuts in the settings under the following commands:
- extension.saveAndRepeatLastCommand
- extension.repeastLastCommand
- extension.sudoRepeatLastCommand
- extension.clearRepeatLastCommand
- extension.clearSudoRepeatLastCommand
- extension.stopCurrentCommand
- extension.restartCurrentCommand

## Customization
Under settings, you can customize the commands (or series of commands) needed for the repetition.

| Command | Description | Default | Example |
| --- | --- | --- | --- |
| repetitionCommand | The command used for re-running the last command in terminal. Available placeholders: [enter] | !! | For zsh with histverify enabled (inserts one additional return at the end of the command): !! [enter] |
| repetitionCommandNth | The command used for re-running the Nth last command in terminal. Available placeholders: [enter] | !-2 | For zsh with histverify enabled (inserts one additional return at the end of the command): !-2 [enter] |
| clearTerminal | The command used to clear the terminal | clear -x | clear |
| sudoCommand | The command prefix to use for running the last commands with higher privileges | sudo | sudo -u someuser |


## Thanks
Thanks to the original author of the plugin [cameronmaske](https://github.com/cameronmaske/rerun-last-command-vscode)

## Contributing
Feel free to submit a PR with any suggested changes or improvements.