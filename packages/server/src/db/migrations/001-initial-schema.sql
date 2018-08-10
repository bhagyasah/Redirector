-- Up
CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  gender TEXT,
  regToken TEXT,
  mobileNo TEXT,
  image TEXT
);

CREATE TABLE IF NOT EXISTS WWBoard(
  id INTEGER PRIMARY KEY  AUTOINCREMENT,
  userId INTEGER NOT NULL,
  message TEXT NOT NULL,
  date TEXT NOT NULL,


  --Constraints
  CONSTRAINT WWBoard_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS GPSLocation(
  timeStamps INTEGER NOT NULL,
  latitude INTEGER NOT NULL,
  longitude INTEGER NOT NULL,
  userId INTEGER NOT NULL,



  -- Constraints
  CONSTRAINT GPSLocation_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Contacts(
  contactId INTEGER NOT NULL,
  contactNo INTEGER NOT NULL,
  contactName TEXT NOT NULL,
  userId INTEGER NOT NULL,

  -- Constraints
  CONSTRAINT Contacts_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS CalLogs(
  callLogId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  contactName TEXT,
  contactNo TEXT NOT NULL,
  dateTime INTEGER NOT NULL,
  callDuration INTEGER NOT NULL,
  countryIso TEXT NOT NULL,
  callType TEXT NOT NULL,

   -- Constraints
   CONSTRAINT CalLogs_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS inbox(
  smsId TEXT NOT NULL,
  timeStamps INTEGER NOT NULL,
  contactNo INTEGER NOT NULL,
  content TEXT NOT NULL,
  userId INTEGER NOT NULL,

  -- Constraints
  CONSTRAINT Sms_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS outbox(
  smsId TEXT NOT NULL,
  timeStamps INTEGER NOT NULL,
  contactNo INTEGER NOT NULL,
  content TEXT NOT NULL,
  userId INTEGER NOT NULL,

  -- Constraints
  CONSTRAINT Sms_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);


-- Down
