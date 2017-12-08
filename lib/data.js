module.exports = data => {
  const events = data.events

  const participants = data.participation.map(p => ({
    ...p,
    event: data.events.find(e => e.id === p.event_id)
  }))

  const instances = data.instances.map(i => ({
    ...i,
    event: data.events.find(e => e.id === i.event_id)
  }))

  const attendances = data.attendance.map(a => ({
    ...a,
    instance: instances.find(i => i.id === a.instance_id),
    participant: participants.find(p => p.id === a.participant_id)
  }))

  return {
    events,
    participants,
    instances,
    attendances
  }
}
