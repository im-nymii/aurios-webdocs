---
title: The AuriOS shell
permalink: /shell/
---

After the boot sequence, AuriOS launches an **interactive shell** in the VGA
terminal. It reads keystrokes, interprets commands and prints the result.

## How it works

- Input is buffered (up to 256 characters) then parsed into arguments (up to 16
  arguments) when you press **Enter**.
- **Backspace** deletes the last character.
- **Ctrl + L** clears the screen (same as `clear`).
- Previous commands are kept in a **history** (16 entries) accessible with the
  up / down arrows.

## First steps

Type `help` to list the available commands, or `fetch` to display system
information with the ASCII logo:

```text
> help
> fetch
```

The [command reference](/commands/) details each command and its options.

## Adding a command

Commands are handled in `shell_execute()` in `src/kernel/shell.c`, as `strcmp`
comparisons on the command name. To add one:

1. add an `else if (strcmp(cmd_name, " mycommand ") == 0) { … }` block;
2. use `args[1]`, `args[2]`… to read arguments, and `argc` for their count;
3. document it in the `help` command block.
