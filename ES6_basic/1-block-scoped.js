export default function taskBlock(trueOrFalse) {
  let task = true;

  if (trueOrFalse) {
    task = !trueOrFalse;
  } else {
    task = trueOrFalse;
  }

  const task2 = !task;

  return [task, task2];
}
