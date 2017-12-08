import fs from 'fs'
import data from './data'

const statuses = {
  0: '',
  1: 'attendant',
  2: 'excused',
  3: 'unexcused',
  4: 'sick'
}

const output = attendances.map(a => {
  const instance = a.instance
  const event = instance.event
  const participant = a.participant

  return {
    participant: participant.name,
    name: event.name,
    notes: instance.notes,
    date: new Date(instance.year, instance.month - 1, instance.day + 1)
      .toISOString()
      .substring(0, 10),
    status: statuses[a.status]
  }
})

const table = [Object.keys(output[0]), ...output.map(o => Object.values(o))]

const rows = table.map(row => '"' + row.join('","') + '"')
const csv = rows.reduce((acc, cur) => acc + '\n' + cur)

fs.createWriteStream('data.csv', { encoding: 'latin1' }).write(csv)

