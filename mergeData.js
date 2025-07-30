const data = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

function mergeData(sessions) {
  let mergeDataArray = {};

  sessions.forEach((session) => {
    const { user, duration, equipment } = session;

    if (mergeDataArray[user]) {
      mergeDataArray[user].duration += duration;
      mergeDataArray[user].equipment += [
        ...new Set([...mergeDataArray[user].equipment, ...equipment]),
      ];
    }
    mergeDataArray[user] = { user, duration, equipment };
  });

  return Object.values(mergeDataArray);
}

console.log(mergeData(data));
