import React from "react";

export type ButtonProps = {
  title: string;
  icon?: any;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  classes?: string;
};

export type HeaderProps = {
  value: string;
  setTitle(text: string): void;
  addTask(event: React.MouseEvent<HTMLButtonElement>): void;
};

export type InputProps = {
  value: string;
  change(text: string): void;
};

export type TaskProps = {
  tasks: TaskStateProps[];
  deleteTask(ind: number): void;
  completeTask(ind: number): void;
};

// state
export type TaskStateProps = {
  title: string;
  completed: boolean;
};
