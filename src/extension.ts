import { window, commands, ExtensionContext, Location } from 'vscode'

export function activate(context: ExtensionContext) {
    console.log('"Generic Goto" is now active!')

    let disposable = commands.registerCommand('extension.generic-goto', () => {
        const editor = window.activeTextEditor
        if (!editor) {
            return
        }

        const sel = editor.selection

        if (sel.isEmpty) {
            const uri = editor.document.uri
            commands
                .executeCommand(
                    'vscode.executeDefinitionProvider',
                    uri,
                    sel.active
                )
                .then(definitions => {
                    const def = definitions as Location[]

                    if (!def || def.length === 0) {
                        commands.executeCommand('editor.action.openLink')
                    } else {
                        window.showTextDocument(def[0].uri, {
                            selection: def[0].range,
                        })
                    }
                })
        } else {
            commands.executeCommand('workbench.action.terminal.runSelectedText')
        }
    })

    context.subscriptions.push(disposable)
}

export function deactivate() {}
