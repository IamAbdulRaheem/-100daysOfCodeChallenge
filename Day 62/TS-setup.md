**Setup**
---
**1.Install Git:**
- Download Git from the official website: [Git Downloads.](https://git-scm.com/downloads)
- Follow the installation instructions for your specific operating system.


**2.Install Visual Studio Code (VSCode):**
- Download Visual Studio Code from the official website: [VSCode Downloads.](https://code.visualstudio.com/download)
- Follow the installation instructions for your specific operating system.

**3.Install Node.js:**
- Download Node.js from the official website: [Node.js Downloads.](https://nodejs.org/)
- Choose the LTS (Long-Term Support) version for stability or the Current version for the latest features.
- Follow the installation instructions for your specific operating system.

**4.Verify Node.js Installation (Optional):**
- Open your terminal or Git Bash.

- Run the following command to check if Node.js is installed:
```html
node -v

```
- It should display the Node.js version if it's installed correctly.

**5.Install TypeScript:**
- Once Node.js is installed, you can use the Node Package Manager (npm) to install TypeScript globally.

- Open your terminal or Git Bash.

- Run the following command to install TypeScript:
```html
npm install -g typescript
```
- After installation, verify TypeScript by running:
```html
tsc -v
```
- It should display the TypeScript version if it's installed correctly.
<hr style="border: 5px solid black; border-radius: 5px;">

**Create Your First Application**
---
1.Create a new folder on your desktop, for example, named "typescript."
2.Inside the "typescript" folder, create a new file called <mark>index.ts</mark> and open it in Visual Studio Code (VS Code).
3.Write the following code in <mark>index.ts</mark>:
```typescript
console.log(Math.floor(11.3));
```
1.Notice that VS Code highlights <mark>Math.floor()</mark> as if there's a problem even before compiling or running the code.
2.If you hover over it, you will see the message "(expected 1 argument but got 0)."
3.To fix the problem, add a number (e.g., 11.3) as an argument inside <mark>Math.floor()</mark>
<hr style="border: 5px solid black; border-radius: 5px;">
