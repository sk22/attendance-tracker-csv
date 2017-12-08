const statuses = {
  0: '',
  1: 'attendant',
  2: 'excused',
  3: 'unexcused',
  4: 'sick'
}

const mapToOutput = ({ attendances }) =>
  attendances.map(a => {
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

const table = output => [
  Object.keys(output[0]),
  ...output.map(o => Object.values(o))
]

const rows = table => table.map(row => '"' + row.join('","') + '"')
const csv = rows => rows.reduce((acc, cur) => acc + '\n' + cur)

module.exports = data => csv(rows(table(mapToOutput(data))))
