insert into destino( nombre , ruta , fk_cooperativa )
values
( 'Santo Domingo' , 'I dont know' , '2' ),
( 'Latacunga' , 'I dont know' , '3' ),
( 'Manta' , 'I dont know' , '4' ),
( 'Chimborazo' , 'I dont know' , '5' ),
( 'Los Rios' , 'I dont know' , '6' ),
( 'Duran' , 'I dont know' , '7' ),
( 'Babahoyo' , 'I dont know' , '8' ),
( 'Portoviejo' , 'I dont know' , '9' ),
( 'Tulcan' , 'I dont know' , '10' ),
( 'Riobamba' , 'I dont know' , '11' ),
( 'Quevedo' , 'I dont know' , '12' ),
( 'Azogues' , 'I dont know' , '13' ),
( 'Puyo' , 'I dont know' , '14' ),
( 'Otavalo' , 'I dont know' , '15' ),
( 'Salinas' , 'I dont know' , '16' ),
( 'Guaranda' , 'I dont know' , '17' ),
( 'Milagro' , 'I dont know' , '18' ),
( 'Tena' , 'I dont know' , '19' ),
( 'Bañosde Agua Santa' , 'I dont know' , '20' ),
( 'Napo' , 'I dont know' , '21' ),
( 'Macas' , 'I dont know' , '1' ),
( 'Pastaza' , 'I dont know' , '2' ),
( 'Sucumbios' , 'I dont know' , '3' ),
( 'Chone' , 'I dont know' , '4' ),
( 'Sangolqui' , 'I dont know' , '5' ),
( 'San Grabiel' , 'I dont know' , '6' ),
( 'Zaruma' , 'I dont know' , '7' ),
( 'Gualaceo' , 'I dont know' , '8' ),
( 'Machachi' , 'I dont know' , '9' ),
( 'Cuenca' , 'I dont know' , '10' ),
( 'Atuntaqui' , 'I dont know' , '11' ),
( 'La Libertad' , 'I dont know' , '12' ),
( 'Daule' , 'I dont know' , '13' ),
( 'Vilcabamba' , 'I dont know' , '14' );


insert into asiento( id_asiento , estado , descripcion  , nro_asiento , id_bus ) values ( 13 , true , 'pasillo' ,  '2' , 5  ), 
( 23 , true , 'ventana' ,  '3' , 5  ),
( 14 , true , 'pasillo' ,  '4' , 5  ),
( 15 , true , 'ventana' ,  '5' , 5  ),
( 16 , true , 'pasillo' ,  '6' , 5  ),
( 17 , true , 'ventana' ,  '7' , 5  ),
( 18 , true , 'pasillo' ,  '8' , 5  ),
( 19 , true , 'ventana' ,  '9' , 5  ),
( 20 , true , 'pasillo' ,  '10' , 5  ),
( 21 , true , 'ventana' ,  '11' , 5  ),
( 22 , true , 'pasillo' ,  '12' , 5  );



select * from bus
select * from chofer
select * from cliente
select * from cooperativa
select * from destino
select * from detalle_reserva
select * from formulario_contacto
select * from horario
select * from reserva
select * from terminal	
insert into terminal( id_terminal , nombre , id_bus ) values( 2  , 'Quitumbe' , 5 );
insert into cooperativa( id_cooperativa , nombre  ) values( 2  , 'Cooperativa Baños' );
insert into reserva( id , fecha , estado , nro_niños , nro_adultos , id_bus , id_destino ,  lugar_salida , hora  ) values( 1 , '2021-04-10' , true , 2 , 2 , 5 , 3 , 'Quito' , '08:00' );
insert into detalle_reserva( id_reserva , id_asiento , cedula_cliente  ) values( 1  , 8 , '' );

select * from bus
insert into bus( nro_unidad , capacidad , nro_piso , id_cooperativa , id_horario , cedula_chofer ) values( 35 , 42 , '1' , 2 , 1 , 123456789 );


select * from destino
select * from cooperativa
alter table destino add column fk_cooperativa integer
alter table destino add constraint fk_cooperativa foreign key(fk_cooperativa) references cooperativa(id_cooperativa);

update destino set fk_cooperativa = '2' where nombre='Quito';


select * from cooperativa
select * from destino

delete  from destino where fk_cooperativa = '2'



insert into chofer( cedula, nombre , apellido ) values
( '1234564444' , 'Juan' , 'Montes'  ),
( '1234564442' , 'Andres' , 'Campos'),
( '12340577456' , 'Alexis' , 'Bartolo' ),
( '12340575465' , 'Pedro ', 'Alban'),
( '1234057454' , 'Pedro ', 'Alban'),
( '123405545' , 'Juan ', 'Alban'),
( '1234054587' , 'Pedro ', 'Cierra'),
( '1234057545' , 'Alex ', 'Serra'),
( '123405421' , 'Sebastian ', 'Balarezo'),
( '123405656' , 'Juan', 'Almendaris'),
( '123445744' , 'Pedro ', 'Albana'),
( '1234054654' , 'Hernesto ', 'Alban'),
( '12345456744' , 'Alejandro ', 'Bartolo'),
( '12341545644' , 'Abraham  ', 'Cerrucho');



alter table bus add constraint fk_destino foreign key( fk_destino ) references destino( id_destino )

select * from destino
alter table bus add column fk_destino integer ; 

delete from 
select * from chofer
alter table destino drop fk_bus
select * from horario
insert into horario( id_horario , hora_salida ) values
( 2 , '10:00' ),
( 3 , '11:00' )

update destino set fk_bus = '1' where nombre='Santo Domingo' 
insert into chofer( cedula, nombre , apellido ) values
( '12345678' , 'Jose' , 'Plua'  ),
( '12349678' , 'Fercho' , 'Plua'  ),
( '12341678' , 'Enrick' , 'Arboleda'  ),
( '12365678' , '' , 'Agua'  ),
insert into bus( nro_unidad , capacidad , nro_piso , id_cooperativa , id_horario , cedula_chofer ) values( '2' , 40 , 2 , 1 ,  , '123456789' );




select * from cooperativa
select * from bus
select * from horario

insert into bus( nro_unidad , capacidad ,nro_piso , id_cooperativa , id_horario , cedula_chofer ) 
values
( 1 ,42, '1' , 20 , 1 , '1234564442' ),
(2 ,41, '2' , 14 , 2 , '12340577456'),
(3 ,38, '2' , 14 , 3 , '12340575465'),
(4 ,40, '1' , 14 , 3 , '1234057454'),
(5 ,39, '2' , 14 , 1 , '123405545'),
(6 ,43, '1' , 14 , 3 , '1234057545'),
(7 ,40, '2' , 14 , 3 , '123405421'),
(8 ,39, '2' , 14 , 1 , '123405656'),
(9 ,38, '1' , 14 , 2 , '1234054587'),
(10 ,39, '2' , 14 , 2 , '123445744'),
(11 ,38, '1' , 14 , 1 , '1234054654'),
(12 ,36, '2' , 14 , 1 , '12345456744'),
(13 ,38, '1' , 12 , 2 , '12341545644');




select * from bus
update bus set fk_destino = '1' where id_bus = 1
update bus set fk_destino = '3' where id_bus = 22
update bus set fk_destino = '79' where id_bus = 5
update bus set fk_destino = '80' where id_bus = 5
update bus set fk_destino = '81' where id_bus = 24
update bus set fk_destino = '82' where id_bus = 25
update bus set fk_destino = '83' where id_bus = 26
update bus set fk_destino = '84' where id_bus = 27
update bus set fk_destino = '85' where id_bus = 28
update bus set fk_destino = '85' where id_bus = 28
update bus set fk_destino = '87' where id_bus = 29
update bus set fk_destino = '88' where id_bus = 30
update bus set fk_destino = '89' where id_bus = 31
update bus set fk_destino = '90' where id_bus = 32
update bus set fk_destino = '91' where id_bus = 32
update bus set fk_destino = '92' where id_bus = 33
update bus set fk_destino = '93' where id_bus = 34
update bus set fk_destino = '95' where id_bus = 23


/* Recordatorio : Tienes que corregir el error de actualizacion de datos al momento de cambiar de terminal no se cambios correctamente los destinos en base a su cooperativa */
