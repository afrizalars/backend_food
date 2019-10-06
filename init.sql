CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  noHp VARCHAR(255) NOT NULL,
  NIP VARCHAR(255) NOT NULL,
  NamaAtasan VARCHAR(255) NOT NULL,
  NoHPatasan VARCHAR(255) NOT NULL,
  PASS VARCHAR(255) NOT NULL,
  ROLES VARCHAR(255) NOT NULL
);

CREATE TABLE Driver(
  ID SERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  foto TEXT NOT NULL,
  noHp VARCHAR(255) NOT NULL,
  PlatNo VARCHAR(25) NOT NULL,
  JenisMobil VARCHAR(255) NOT NULL,
  StatusDriver VARCHAR(255) NOT NULL
);

CREATE TABLE Orders(
  ID SERIAL PRIMARY KEY,
  OrderFrom VARCHAR(255),
  OrderTo VARCHAR(255),
  OrderDate DATE,
  GoTime VARCHAR(255),
  BackTime VARCHAR(255),
  Notes VARCHAR(255),
  NIP VARCHAR(255),
  StatusOrder VARCHAR(255),
  latitude VARCHAR(255),
  longitude VARCHAR(255)
);


INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('sada', '082220201121','350601151295011','Stevens','082221210012','password','user');

INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('yoga', '082220201121','87987967698','','','password','waiting');

INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('afrizal', '082220201121','35060115011','Stevens','082221210012','password','admin');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude)
VALUES ('TES','TES',NOW(),'TES','TES','TES','350601151295011','waiting','lat','long');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude)
VALUES ('TES','TES',NOW(),'TES','TES','TES','350601151295011','done','lat','long');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude)
VALUES ('TES','TES',NOW(),'TES','TES','TES','350601151295011','going','lat','long');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude)
VALUES ('TES','TES',NOW(),'TES','TES','TES','350601151295011','notapproved','lat','long');

INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('agung','xx','08998309128','AG090','avansa','available');

