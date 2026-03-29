# Anveshak Rover User Interface
I still don't fully understand all this but lite

# Architecture 

## src

### components
This folder contains the independent React components used in the ARUI

// List down the components here


### layout
Just here for the vibes

### ros

rosClient.js: This file connects to rosbridge, rosbridge is the thing that translates ROS2 info streams to JSON for React

topics.js: Whichever ROS2 topics you want to use in the GUI, just add them in this, so that just by importing TOPICS, you can use whatever topics in whichever file.

#### hooks
Still havent figured this thing out.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
