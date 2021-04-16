insert into destino( nombre , ruta , fk_cooperativa )
values
( 'Santo Domingo' , 'I dont know' , '14' ),
( 'Latacunga' , 'I dont know' , '14' ),
( 'Manta' , 'I dont know' , '14' ),
( 'Chimborazo' , 'I dont know' , '14' ),
( 'Los Rios' , 'I dont know' , '14' ),
( 'Duran' , 'I dont know' , '14' ),
( 'Babahoyo' , 'I dont know' , '14' ),
( 'Portoviejo' , 'I dont know' , '14' ),
( 'Tulcan' , 'I dont know' , '14' ),
( 'Riobamba' , 'I dont know' , '14' ),
( 'Quevedo' , 'I dont know' , '14' ),
( 'Azogues' , 'I dont know' , '14' ),
( 'Puyo' , 'I dont know' , '14' ),
( 'Otavalo' , 'I dont know' , '15' ),
( 'Salinas' , 'I dont know' , '16' ),
( 'Guaranda' , 'I dont know' , '17' ),
( 'Milagro' , 'I dont know' , '18' ),
( 'Tena' , 'I dont know' , '19' ),
( 'Bañosde Agua Santa' , 'I dont know' , '20' ),
( 'Napo' , 'I dont know' , '21' ),
( 'Macas' , 'I dont know' , '14' ),
( 'Pastaza' , 'I dont know' , '14' ),
( 'Sucumbios' , 'I dont know' , '14' ),
( 'Chone' , 'I dont know' , '14' ),
( 'Sangolqui' , 'I dont know' , '14' ),
( 'San Grabiel' , 'I dont know' , '14' ),
( 'Zaruma' , 'I dont know' , '14' ),
( 'Gualaceo' , 'I dont know' , '14' ),
( 'Machachi' , 'I dont know' , '14' ),
( 'Cuenca' , 'I dont know' , '14' ),
( 'Atuntaqui' , 'I dont know' , '14' ),
( 'La Libertad' , 'I dont know' , '14' ),
( 'Daule' , 'I dont know' , '14' ),
( 'Vilcabamba' , 'I dont know' , '14' );


insert into asiento( id_asiento , estado , descripcion  , nro_asiento , id_bus ) values ( 13 , true , 'pasillo' ,  '14' , 5  ), 
( 23 , true , 'ventana' ,  '14' , 5  ),
( 14 , true , 'pasillo' ,  '14' , 5  ),
( 15 , true , 'ventana' ,  '14' , 5  ),
( 16 , true , 'pasillo' ,  '14' , 5  ),
( 17 , true , 'ventana' ,  '14' , 5  ),
( 18 , true , 'pasillo' ,  '14' , 5  ),
( 19 , true , 'ventana' ,  '14' , 5  ),
( 20 , true , 'pasillo' ,  '14' , 5  ),
( 21 , true , 'ventana' ,  '14' , 5  ),
( 22 , true , 'pasillo' ,  '14' , 5  );



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
insert into bus( nro_unidad , capacidad , nro_piso , id_cooperativa , id_horario , cedula_chofer ) values( 35 , 42 , '14' , 2 , 1 , 123456789 );


select * from destino
select * from cooperativa
alter table destino add column fk_cooperativa integer
alter table destino add constraint fk_cooperativa foreign key(fk_cooperativa) references cooperativa(id_cooperativa);

update destino set fk_cooperativa = '14' where nombre='Quito';


select * from cooperativa
select * from destino

delete  from destino where fk_cooperativa = '14'



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

update destino set fk_bus = '14' where nombre='Santo Domingo' 
insert into chofer( cedula, nombre , apellido ) values
( '12345678' , 'Jose' , 'Plua'  ),
( '12349678' , 'Fercho' , 'Plua'  ),
( '12341678' , 'Enrick' , 'Arboleda'  ),
( '12365678' , '' , 'Agua'  ),
insert into bus( nro_unidad , capacidad , nro_piso , id_cooperativa , id_horario , cedula_chofer ) values( '14' , 40 , 2 , 1 ,  , '123456789' );




select * from cooperativa
select * from bus
select * from horario

insert into bus( nro_unidad , capacidad ,nro_piso , id_cooperativa , id_horario , cedula_chofer ) 
values
( 1 ,42, '14' , 20 , 1 , '1234564442' ),
(2 ,41, '14' , 14 , 2 , '12340577456'),
(3 ,38, '14' , 14 , 3 , '12340575465'),
(4 ,40, '14' , 14 , 3 , '1234057454'),
(5 ,39, '14' , 14 , 1 , '123405545'),
(6 ,43, '14' , 14 , 3 , '1234057545'),
(7 ,40, '14' , 14 , 3 , '123405421'),
(8 ,39, '14' , 14 , 1 , '123405656'),
(9 ,38, '14' , 14 , 2 , '1234054587'),
(10 ,39, '14' , 14 , 2 , '123445744'),
(11 ,38, '14' , 14 , 1 , '1234054654'),
(12 ,36, '14' , 14 , 1 , '12345456744'),
(13 ,38, '14' , 12 , 2 , '12341545644');




select * from bus
update bus set fk_destino = '14' where id_bus = 1
update bus set fk_destino = '14' where id_bus = 22
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

insert into bus(nro_unidad , capacidad , nro_pisos ,  id_horario , cedula_chofer ) values
( 1 , '40' , '14' , '14' , '123456789' ),
( 2 , '38' , '14' , '14' , '1234564442' ),
( 3 , '40' , '14' , '14' , '1234564444' ),
( 4 , '41' , '14' , '14' , '12340577456' ),
( 5 , '40' , '14' , '14' , '12340575465' ),
( 6 , '35' , '14' , '14' , '1234057454' ),
( 7 , '39' , '14' , '14' , '123405545' ),
( 8 , '41' , '14' , '14' , '1234054587' ),
( 9 , '42' , '14' , '14' , '1234057545' ),
( 10 , '40' , '14' , '14' , '123405421' ),
( 11 , '39' , '14' , '14' , '123405656' ),
( 12 , '41' , '14' , '14' , '123445744' ),
( 13 , '43' , '14' , '14' , '1234054654' ),
( 14 , '38' , '14' , '14' , '12345456744' ),
( 15 , '39' , '14' , '15' , '12341545644' );


delete from asiento where id_asiento='83'
select * from asiento


insert into asiento( nombre_asiento  ,estado , descripcion , fk_bus , fk_horario , nro_piso)values
( '1V'  , true , 'ventana' , '14' ,  '14' ,  1  ),
( '2P'  , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '3V'  , true , 'ventana' , '14' ,  '14' ,  1  ),
( '4P'  , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '5V'  , true , 'ventana' , '14' ,  '14' ,  1  ),
( '6P'  , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '7V'  , true , 'ventana' , '14' ,  '14' ,  1  ),
( '8P'  , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '9V'  , true , 'ventana' , '14' ,  '14' ,  1  ),
( '10P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '11V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '12P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '13V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '14P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '15V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '16P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '17V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '18P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '19V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '20P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '21V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '22P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '23V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '24P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '25V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '26P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '27V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '28P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '29V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '30P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '31V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '32P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '32V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '34P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '35V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '36P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '37V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '38P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '39V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '40P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '41V' , true , 'ventana' , '14' ,  '14' ,  1  ),
( '42P' , true , 'pasillo' , '14' ,  '14' ,  1  ),
( '43V' , true , 'ventana' , '14' ,  '14' ,  1  )

/* alter table asiento add column id_asiento bigint default nextval('secuencia_fk_asientos');    <================ ASI ES COMO CREE UNA SECUENCIA PARA PARA PK DE LA TABLA ASIENTO, LINK DEL TUTORIAL :   https://www.tutorialesprogramacionya.com/postgresqlya/temarios/descripcion.php?cod=228&punto=70&inicio= */
/* Recordatorio : Tienes que corregir el error de actualizacion de datos al momento de cambiar de terminal no se cambios correctamente los destinos en base a su cooperativa */
