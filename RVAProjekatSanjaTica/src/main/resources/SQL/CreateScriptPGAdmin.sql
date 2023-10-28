drop table if exists smer cascade;
drop table if exists projekat cascade;
drop table if exists grupa cascade;
drop table if exists student cascade;



create table smer(
    id integer primary key,
    naziv varchar(100),
    oznaka varchar(50)
);

create table projekat(
    id integer primary key,
    naziv varchar(100),
    oznaka varchar(10),
    opis varchar(500)
);

create table grupa(
    id integer primary key,
    oznaka varchar(10),
    smer integer not null,
    constraint fk_grupa_smer foreign key(smer) references smer(id)
);

create table student(
    id integer primary key,
    ime varchar(50),
    prezime varchar(50),
    broj_indeksa varchar(20),
    grupa integer not null,
    projekat integer not null,
    constraint fk_student_grupa foreign key(grupa) references grupa(id),
    constraint fk_student_projekat foreign key(projekat) references projekat(id)
);

create index idx_pk_smer on smer(id);
create index idx_pk_projekat on projekat(id);
create index idx_pk_grupa on grupa(id);
create index idx_pk_student on student(id);

create index idx_fk_grupa_smer on grupa(smer);
create index idx_fk_student_grupa on student(grupa);
create index idx_fk_student_projekat on student(projekat);


drop sequence if exists smer_id_seq;
create sequence smer_id_seq
minValue 0
start with 1;

drop sequence if exists projekat_id_seq;
create sequence projekat_id_seq
minValue 0
start with 1;

drop sequence if exists grupa_id_seq;
create sequence grupa_id_seq
minValue 0
start with 1;

drop sequence if exists student_id_seq;
create sequence student_id_seq
minValue 0
start with 1;











