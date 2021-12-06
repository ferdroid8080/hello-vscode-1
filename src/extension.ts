import { commands, ExtensionContext, window } from "vscode";

export function activate(context:ExtensionContext) {
  let helloWorld = async () => {
    const editor = window.activeTextEditor
    editor?.edit(editBuilder => {
      const position = editor.selection.active
      position && editBuilder.insert(position, 'hola mundo vscode')
    })
  }
  let command = commands.registerCommand(
    'ferudinato.helloWorld',
    helloWorld
  )

  context.subscriptions.push(command)
}