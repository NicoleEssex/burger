
USE gmzz04guu4y6gwai;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (ID)
);
