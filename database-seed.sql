--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.4

-- Started on 2022-12-19 16:40:01 +03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16407)
-- Name: dish_ingredient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dish_ingredient (
    id integer NOT NULL,
    dish_id integer,
    ingredient_id integer
);


ALTER TABLE public.dish_ingredient OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16406)
-- Name: dish_ingredient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dish_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dish_ingredient_id_seq OWNER TO postgres;

--
-- TOC entry 3624 (class 0 OID 0)
-- Dependencies: 213
-- Name: dish_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dish_ingredient_id_seq OWNED BY public.dish_ingredient.id;


--
-- TOC entry 212 (class 1259 OID 16398)
-- Name: dishes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dishes (
    id integer NOT NULL,
    dish_name character varying
);


ALTER TABLE public.dishes OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16397)
-- Name: dishes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dishes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dishes_id_seq OWNER TO postgres;

--
-- TOC entry 3625 (class 0 OID 0)
-- Dependencies: 211
-- Name: dishes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dishes_id_seq OWNED BY public.dishes.id;


--
-- TOC entry 210 (class 1259 OID 16389)
-- Name: ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingredients (
    id integer NOT NULL,
    ingredient_name character varying
);


ALTER TABLE public.ingredients OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16388)
-- Name: ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingredients_id_seq OWNER TO postgres;

--
-- TOC entry 3626 (class 0 OID 0)
-- Dependencies: 209
-- Name: ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingredients_id_seq OWNED BY public.ingredients.id;


--
-- TOC entry 218 (class 1259 OID 16435)
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    user_id character varying,
    token uuid,
    is_valid bit(1)
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16434)
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO postgres;

--
-- TOC entry 3627 (class 0 OID 0)
-- Dependencies: 217
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- TOC entry 216 (class 1259 OID 16426)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying,
    password character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16425)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3628 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;


--
-- TOC entry 3453 (class 2604 OID 16410)
-- Name: dish_ingredient id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dish_ingredient ALTER COLUMN id SET DEFAULT nextval('public.dish_ingredient_id_seq'::regclass);


--
-- TOC entry 3452 (class 2604 OID 16401)
-- Name: dishes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dishes ALTER COLUMN id SET DEFAULT nextval('public.dishes_id_seq'::regclass);


--
-- TOC entry 3451 (class 2604 OID 16392)
-- Name: ingredients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredients ALTER COLUMN id SET DEFAULT nextval('public.ingredients_id_seq'::regclass);


--
-- TOC entry 3455 (class 2604 OID 16438)
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- TOC entry 3454 (class 2604 OID 16429)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3614 (class 0 OID 16407)
-- Dependencies: 214
-- Data for Name: dish_ingredient; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (1, 1, 1);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (2, 1, 2);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (3, 1, 3);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (4, 1, 4);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (6, 1, 6);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (7, 2, 1);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (8, 3, 7);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (9, 13, 3);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (10, 13, 7);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (11, 13, 18);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (12, 13, 19);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (13, 13, 20);
INSERT INTO public.dish_ingredient (id, dish_id, ingredient_id) VALUES (14, 3, 20);


--
-- TOC entry 3612 (class 0 OID 16398)
-- Dependencies: 212
-- Data for Name: dishes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.dishes (id, dish_name) VALUES (1, 'menemen');
INSERT INTO public.dishes (id, dish_name) VALUES (2, 'tomato soup');
INSERT INTO public.dishes (id, dish_name) VALUES (3, 'hamburger');
INSERT INTO public.dishes (id, dish_name) VALUES (8, 'salad');
INSERT INTO public.dishes (id, dish_name) VALUES (9, 'omelette');
INSERT INTO public.dishes (id, dish_name) VALUES (11, 'manti');
INSERT INTO public.dishes (id, dish_name) VALUES (12, 'pizza');
INSERT INTO public.dishes (id, dish_name) VALUES (13, 'cheeseburger');


--
-- TOC entry 3610 (class 0 OID 16389)
-- Dependencies: 210
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ingredients (id, ingredient_name) VALUES (1, 'tomato');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (2, 'green pepper');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (3, 'onion');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (4, 'egg');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (6, 'olive oil');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (7, 'ground beef');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (16, 'pumpkin');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (17, 'butter');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (18, 'american cheese');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (19, 'lettuce');
INSERT INTO public.ingredients (id, ingredient_name) VALUES (20, 'buns');


--
-- TOC entry 3618 (class 0 OID 16435)
-- Dependencies: 218
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tokens (id, user_id, token, is_valid) VALUES (1, '{"id":1,"username":"testuser","password":"e10adc3949ba59abbe56e057f20f883e"}', '373889a3-f6ce-4ffe-b126-a615caceabad', NULL);
INSERT INTO public.tokens (id, user_id, token, is_valid) VALUES (3, '1', 'c62c8884-1523-4ce9-b95b-c107343fcd88', B'1');
INSERT INTO public.tokens (id, user_id, token, is_valid) VALUES (2, '1', '7acd8df2-35b2-427b-ba02-65904e2f79a2', B'0');
INSERT INTO public.tokens (id, user_id, token, is_valid) VALUES (4, '1', 'f3f9f82d-f30d-45e1-b853-5b5424d8fbca', B'1');


--
-- TOC entry 3616 (class 0 OID 16426)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, username, password) VALUES (1, 'testuser', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO public.users (id, username, password) VALUES (2, 'testuser13', 'e10adc3949ba59abbe56e057f20f883e');


--
-- TOC entry 3629 (class 0 OID 0)
-- Dependencies: 213
-- Name: dish_ingredient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dish_ingredient_id_seq', 14, true);


--
-- TOC entry 3630 (class 0 OID 0)
-- Dependencies: 211
-- Name: dishes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dishes_id_seq', 13, true);


--
-- TOC entry 3631 (class 0 OID 0)
-- Dependencies: 209
-- Name: ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingredients_id_seq', 20, true);


--
-- TOC entry 3632 (class 0 OID 0)
-- Dependencies: 217
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tokens_id_seq', 4, true);


--
-- TOC entry 3633 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- TOC entry 3461 (class 2606 OID 16412)
-- Name: dish_ingredient dish_ingredient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dish_ingredient
    ADD CONSTRAINT dish_ingredient_pkey PRIMARY KEY (id);


--
-- TOC entry 3459 (class 2606 OID 16405)
-- Name: dishes dishes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dishes
    ADD CONSTRAINT dishes_pk PRIMARY KEY (id);


--
-- TOC entry 3457 (class 2606 OID 16396)
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);


--
-- TOC entry 3467 (class 2606 OID 16442)
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- TOC entry 3465 (class 2606 OID 16433)
-- Name: users user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3462 (class 1259 OID 16418)
-- Name: fki_dish_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_dish_id_fk ON public.dish_ingredient USING btree (dish_id);


--
-- TOC entry 3463 (class 1259 OID 16424)
-- Name: fki_ingredient_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_ingredient_id_fk ON public.dish_ingredient USING btree (ingredient_id);


--
-- TOC entry 3468 (class 2606 OID 16413)
-- Name: dish_ingredient dish_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dish_ingredient
    ADD CONSTRAINT dish_id_fk FOREIGN KEY (dish_id) REFERENCES public.dishes(id) NOT VALID;


--
-- TOC entry 3469 (class 2606 OID 16419)
-- Name: dish_ingredient ingredient_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dish_ingredient
    ADD CONSTRAINT ingredient_id_fk FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id) NOT VALID;


-- Completed on 2022-12-19 16:40:01 +03

--
-- PostgreSQL database dump complete
--

