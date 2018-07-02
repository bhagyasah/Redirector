-- Up
CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL,
  email TEXT NOT NULL,
  gender TEXT NOT NULL,
  regToken TEXT NOT NULL,

  -- Constraints
  CONSTRAINT User_reg_token UNIQUE (regToken)

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
  contactNo INTEGER NOT NULL,
  contactName TEXT NOT NULL,
  userId INTEGER NOT NULL,
  image BLOB,

  -- Constraints
  CONSTRAINT Contacts_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS CalLogs(
  userId INTEGER NOT NULL,
  contactName TEXT NOT NULL,
  contactNo TEXT NOT NULL,
  timeStamps INTEGER NOT NULL,
  callDration INTEGER NOT NULL,
   -- Constraints
   CONSTRAINT CalLogs_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Sms (
  timeStamps INTEGER NOT NULL,
  contactNum INTEGER NOT NULL,
  content TEXT NOT NULL,
  userId INTEGER NOT NULL,

  -- Constraints
  CONSTRAINT Sms_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);


-- Down
