
Handles Attendance Tracker's export files

https://play.google.com/store/apps/details?id=peterman.apps.attendance


```javascript
Attendance {
  id: Number,
  instance: Instance,
  participant: Participant,

  isLate: Boolean,
  note: String,
  status: Number
}
```

```javascript
Event {
  id: Number,
  name: String,

  description: String
}
```

```javascript
Instance {
  id: Number,
  event: Event,

  year: Number,
  month: Number,
  day: Number,
  hour: Number,
  minute: Number,
  notes: String
}
```

```javascript
Participant {
  id: Number,
  name: String,
  event: Event,

  company: String,
  job_title: String,
  contact: Number,
  email: String,
  notes: String,
  phone: String
}
```
