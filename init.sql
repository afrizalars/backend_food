CREATE TABLE users (
  ID UUID NOT NULL DEFAULT uuid_generate_v1(),
  nama VARCHAR(255) NOT NULL,
  noHp VARCHAR(255) NOT NULL,
  NIP VARCHAR(255) NOT NULL,
  NamaAtasan VARCHAR(255) NOT NULL,
  NoHPatasan VARCHAR(255) NOT NULL,
  PASS VARCHAR(255) NOT NULL,
  ROLES VARCHAR(255) NOT NULL,
  CONSTRAINT ID_users PRIMARY KEY (ID)
);

CREATE TABLE Food_History (
  id SERIAL,
  USERID VARCHAR(255) NOT NULL,
  FoodID VARCHAR(255) NOT NULL,
  ServingSize INT NOT NULL,
  Tanggal DATE,
  CONSTRAINT USERID PRIMARY KEY (USERID)
);

INSERT INTO Food_History(USERID,FoodID,ServingSize,Tanggal) VALUES(111000,8040173033475,2,NOW());

INSERT INTO Food_History(USERID,FoodID,ServingSize,Tanggal,time,timestamp) VALUES(98098098,8040173033475,2,NOW(),'breakfast',NOW());


SELECT sum(energy_100g) as t_energy,sum(fat_100g) as t_fat,sum(carbohydrates_100g) as t_carbo,sum(proteins_100g) as t_protein
FROM food_history LEFT JOIN foods_fact_full ON food_history.foodid = foods_fact_full.index::text 
WHERE food_history.userid ='5c98ab37a5cacc1ea8b718c4'
AND food_history.tanggal > current_timestamp - interval '30 day';


SELECT tanggal,avg(energy_100g),avg(energy_100g/4.184) as t_energy
FROM food_history LEFT JOIN foods_fact_full ON food_history.foodid = foods_fact_full.index::text 
WHERE food_history.userid ='5c98ab37a5cacc1ea8b718c4'
AND food_history.tanggal > current_timestamp - interval '30 day' GROUP BY food_history.tanggal
ORDER BY food_history.tanggal DESC;



SELECT * FROM Food_History a, Foods_fact_full b where a.tanggal > current_timestamp - interval '30 day' and a.FoodID = b.code and a.USERID = '"+userid+"';
var sql = "SELECT * FROM Food_History a, Foods_fact_full b where a.tanggal > current_timestamp - interval '30 day' and a.FoodID = b.code and a.USERID = '"+userid+"';"
SELECT * FROM Food_History a, Foods_fact_full b where a.FoodID = b.code and a.USERID = '111000';


SELECT avg(energy_100g)/4.184 as avg_cal 
            FROM food_history LEFT JOIN foods_fact_full ON food_history.foodid = foods_fact_full.index::text
            WHERE food_history.userid ='5c98ab37a5cacc1ea8b718c4'
            AND food_history.tanggal > current_timestamp - interval '30 day'; 

CREATE TABLE Driver(
  ID UUID NOT NULL DEFAULT uuid_generate_v1(),
  nama VARCHAR(255) NOT NULL,
  foto TEXT NOT NULL,
  noHp VARCHAR(255) NOT NULL,
  PlatNo VARCHAR(25) NOT NULL,
  JenisMobil VARCHAR(255) NOT NULL,
  StatusDriver VARCHAR(255) NOT NULL,
  CONSTRAINT ID_Driver PRIMARY KEY (ID)
);

CREATE TABLE Trips(
  ID UUID NOT NULL DEFAULT uuid_generate_v1(),
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
  batch VARCHAR(255),
  CONSTRAINT ID_Trips PRIMARY KEY (ID)
);

INSERT INTO Trips (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
VALUES ('','',NOW(),'08:30:01','11:30:01','','12345','pending','','','1');

CREATE TABLE Orders(
  ID UUID NOT NULL DEFAULT uuid_generate_v1(),
  NIP VARCHAR(255),
  DateOrder VARCHAR(255),
  id_trip VARCHAR(255),
  CONSTRAINT ID_Orders PRIMARY KEY (ID)
);

-- INSERT INTO Orders (NIP,DateOrder,id_trip)
-- VALUES ('12345',NOW(),'2774395a-e9b0-11e9-aa5b-d0817ac0ff28');

-- INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
-- VALUES ('','',NOW(),'13:30:01','15:30:01','','1234567','pending','','','2');

-- INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch)
-- VALUES ('','',NOW(),'13:30:01','15:30:01','','1234567','done','','','2');


-- --DRIVERS
INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('agung','','','','','available');

INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('huda','','','','','not available');

INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver)
VALUES ('faris','','','','','not available');