---
title: Command reference
permalink: /commands/
---

List of the shell commands built into AuriOS (v0.2), as defined in
`src/kernel/shell.c`.

## General commands

| Command       | Description                                    |
| ------------- | ---------------------------------------------- |
| `help`        | Show the list of commands                      |
| `fetch`       | Show system information with the ASCII logo    |
| `clear`       | Clear the terminal (also via **Ctrl + L**)     |
| `echo <text>` | Repeat the given text to the terminal          |
| `uptime`      | Show the time elapsed since boot               |
| `reboot`      | Restart the machine                            |
| `exit`        | Power off the machine (QEMU / Bochs)           |
| `crash`       | Intentionally freeze the machine (fun command) |

## Memory & debugging

| Command                         | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| `memdump <size>`                | Print the PMM bitmap to the logs                    |
| `memtest`                       | Allocate / free on the kernel heap (heap self-test) |
| `mmap`                          | Print the current virtual memory mappings           |
| `mia`                           | Trigger a _page fault_ to test the MMU              |
| `peek <hex_address>`            | Read and print memory at an address                 |
| `poke <hex_address> <hex_byte>` | Write a byte at an address                          |

## `uptime` options

```text
uptime        Show hours / minutes / seconds
uptime -r     Show raw time in milliseconds
uptime -s     Show time in seconds
uptime -p     Show time in a pretty format
uptime -h     Show the command help
```

## `echo` options

```text
echo <text>   Repeat the text
echo -n       Do not add a trailing newline
echo -h       Show the command help
```

## Examples

```text
> echo -n Hello
> uptime -p
> peek B8000
> poke B8000 41
```
