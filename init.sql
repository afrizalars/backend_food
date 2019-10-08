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
  longitude VARCHAR(255),
  batch VARCHAR(255)
);

--USER
INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('sada', '082220201121','350601151295011','Stevens','082221210012','password','user');

INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('yoga', '082220201121','87987967698','','','password','waiting');

INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES)
VALUES  ('afrizal', '082220201121','35060115011','Stevens','082221210012','password','admin');

-- /USER


-- ORDERS
INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
VALUES ('','',NOW(),'08:30:01','11:30:01','','1234567','waiting','','','1');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
VALUES ('','',NOW(),'13:30:01','15:30:01','','1234567','pending','','','2');

INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
VALUES ('','',NOW(),'13:30:01','15:30:01','','1234567','done','','','2');



--DRIVERS
INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('agung','','','','','available');

INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('huda','','','','','not available');

INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('faris','','','','','not available');

