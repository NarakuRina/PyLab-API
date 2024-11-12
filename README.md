# PyLab API

**PyLab** is a branch of one of my projects, [TinC3](https://www.tinc3.com). It's a website that let students code simple Python programs cross-platform without the need of downloading anything onto their device.

> Depend on my mood, I might or might not provide any support for this project.

### What Is This?

This is an API that let you execute code in ~~various languages~~ Python on ~~your own website for free~~ (no, there's no fucking catch, it's literally free)~~ **PyLab**.
> I have edited this fork to be able to run on Pterodactyl Panel (the original version is made for Docker).

### Execute Code

#### `POST` /

This endpoint allows you to execute your script and fetch output results.

### What are the Input Parameters for execute api call?

| Parameter  | Description                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------- |
| "code"     | Should contain the script that needs to be executed                                           |
| "language" | DEPRECATED | Only Python is allowed, as this fork is made with only **PyLab** in mind         |
| "input"    | In case the script requires any kind of input for execution, leave empty if no input required |

### What are the languages that are supported for execution?

Whichever language you might mention in the language field, it would be automatically executed with the latest version of it's compiler.
| Languages | Language as a payload | Status |
|-----------|-----------------------|--------|
| Java      | java                  | ❎    |
| Python    | py                    | ✅    |
| C++       | cpp                   | ❎    |
| C         | c                     | ❎    |
| GoLang    | go                    | ❎    |
| C#        | cs                    | ❎    |
| NodeJS    | js                    | ❎    |

I have removed every other languages except for Python, for obvious reason.

### Sample Outpu

The output is a JSON object comprising only one parameter that is the output.

```json
{
  "timeStamp": 1672439982964,
  "status": 200,
  "output": "Enter your value: 12\n",
  "error": "",
  "language": "py",
  "info": "Python 3.6.9\n"
}
```

> Since a lot of people had issues with executing the previous API from backend or serverless function, unlike the previous version of the API, this version of the API won't throw any Cross Origin errors so you can use this from the front end without any worries. Thank me later ;)

#### `GET` /list

This endpoint allows you to list all languages supported and their versions.
Removed for obvious reason.