CREATE DATABASE IF NOT EXISTS node;
USE node;

CREATE TABLE IF NOT EXISTS students (
    id INT NOT NULL,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS subjects (
    id INT NOT NULL,
    name TEXT NOT NULL,
    hoursAWeek INT NOT NULL
);

create table messages(
    content text
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
