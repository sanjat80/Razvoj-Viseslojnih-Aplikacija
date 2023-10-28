insert into smer(id,naziv,oznaka)
values(nextval('smer_id_seq'),'Inzenjerstvo informacionih sistema','IT');
insert into smer(id,naziv,oznaka)
values(nextval('smer_id_seq'),'Mehatronika','MH');
insert into smer(id,naziv,oznaka)
values(nextval('smer_id_seq'),'Racunarstvo i automatika','RA');
insert into smer(id,naziv,oznaka)
values(nextval('smer_id_seq'),'Primjenjeno softversko inzenjerstvo','PR');
insert into smer(id,naziv,oznaka)
values(nextval('smer_id_seq'),'Graficki dizajn','GRID');

insert into projekat(id,naziv,oznaka,opis)
values(nextval('projekat_id_seq'),'National Hockey League','NHL','Mapa puta razvoja i planiranje sprinta');
insert into projekat(id,naziv,oznaka,opis)
values(nextval('projekat_id_seq'),'Zippo','ZP','Integrisan WorkOS sposoban da upravlja internim radnim tokovima i spoljnim dobavljacima');
insert into projekat(id,naziv,oznaka,opis)
values(nextval('projekat_id_seq'),'Deezer','DZ','Integrisan, intuitivan radni prostor koji doprinosi multinacionalnoj saradnji');
insert into projekat(id,naziv,oznaka,opis)
values(nextval('projekat_id_seq'),'Government','G','Obezbjediti efikasnu komunikaciju tokom globalne pandemije');


insert into grupa(id,oznaka,smer)
values(nextval('grupa_id_seq'),1,1);
insert into grupa(id,oznaka,smer)
values(nextval('grupa_id_seq'),2,2);
insert into grupa(id,oznaka,smer)
values(nextval('grupa_id_seq'),3,3);
insert into grupa(id,oznaka,smer)
values(nextval('grupa_id_seq'),4,4);
insert into grupa(id,oznaka,smer)
values(nextval('grupa_id_seq'),5,5);

insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Sanja','Tica','IT80/2019',1,1);
insert into student(id,ime,prezime,broj_indeksa,grupa,projekat)
values(nextval('student_id_seq'),'Nikolina', 'Bodo','IT71/2019',1,2);
insert into student(id,ime,prezime,broj_indeksa,grupa,projekat)
values(nextval('student_id_seq'),'Andreja','Vukovic','IT64/2019',2,2);
insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Sandra','Lazarevic','IT76/2019',2,3);
insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Natasa','Jovanovic','IT24/2019',3,3);
insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Anja','Janjusevic','IT72/2019',3,3);
insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Ljubica','Jovicic','IT67/2019',4,4);
insert into student (id,ime,prezime,broj_indeksa,grupa,projekat)
values (nextval('student_id_seq'),'Marija','Petrovic','IT69/2019',4,4);

insert into smer(id,naziv,oznaka)values(-100,'test','test');
insert into projekat(id,naziv,oznaka,opis) values (-100,'test','test','test');
insert into grupa(id,oznaka,smer) values (-100,'6',1);
insert into student(id,ime,prezime,broj_indeksa,grupa,projekat) values(-100,'test','test','test',1,1);


