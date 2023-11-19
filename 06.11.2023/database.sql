CREATE DATABASE node;
USE node;

create table students(
    id int AUTO_INCREMENT PRIMARY key,
    name text NOT NULL,
    surname text NOT NULL,
    email text NOT NULL
);

create table subjects(
    id int AUTO_INCREMENT PRIMARY key,
    name text not null,
    hoursAWeek int not null
);

create table messages(
    id int AUTO_INCREMENT PRIMARY key,
    name text not null,
    email text not null,
    topic text not null,
    content text not null
);

INSERT INTO students (id, name, surname, email) VALUES
    (1, 'Karim', 'Benzema', 'karim.benzema@realmadrid.com'),
    (2, 'Sergio', 'Ramos', 'sergio.ramos@realmadrid.com'),
    (3, 'Luka', 'Modrić', 'luka.modric@realmadrid.com'),
    (4, 'Eden', 'Hazard', 'eden.hazard@realmadrid.com'),
    (5, 'Casemiro', 'Casemiro', 'casemiro@realmadrid.com'),
    (6, 'Toni', 'Kroos', 'toni.kroos@realmadrid.com'),
    (7, 'Vinicius', 'Junior', 'vinicius.junior@realmadrid.com'),
    (8, 'Federico', 'Valverde', 'federico.valverde@realmadrid.com'),
    (9, 'Dani', 'Carvajal', 'dani.carvajal@realmadrid.com'),
    (10, 'Marcelo', 'Vieira', 'marcelo.vieira@realmadrid.com'),
    (11, 'Thibaut', 'Courtois', 'thibaut.courtois@realmadrid.com');

INSERT INTO subjects (id, name, hoursAWeek) VALUES
    (1, 'Mathematics', 4),
    (2, 'Physics', 3),
    (3, 'Geography', 1),
    (4, 'Physical Education', 3),
    (5, 'PAW', 2),
    (6, 'Chemistry', 3),
    (7, 'Computer Science', 2),
    (8, 'History', 2),
    (9, 'English Language', 3),
    (10, 'Biology', 3);

do .env -> DATABASE_URL="mysql://root:root@localhost:3306/node"