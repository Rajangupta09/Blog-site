# Blog-Site
```
    A Blog website base on Django, with Blog, comment, pagination features
```
## Clone the project to your system

```console
git clone https://github.com/Rajangupta09/Blog-site.git
```

## Change into project directory

```console
cd Blog-site
```

## Create virtual environment

```python
virtualenv env
./env/Scripts/activate
```

## Install requirements

```python
pip install -r requirements.txt
```

## Create database

<!-- For mysql change engine in settings.py/DATABASES

	'django.db.backends.mysql'

For postgresql change engine in settings.py/DATABASES

	'django.db.backends.postgresql_psycopg2'

Change the user and password according to your database servers

	Create new database and set 'NAME' : <database_name> -->

```console
sudo -u postgres psql -f ./setup.sql
```

## Makemigrations and migrate

```python
python manage.py makemigrations
python manage.py migrate
```

## Start the development server

```python
python manage.py runserver
```
