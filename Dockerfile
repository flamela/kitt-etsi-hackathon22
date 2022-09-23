FROM python:3.9

#RUN apt update && apt install -y libgl1-mesa-dev libglib2.0-0

COPY . .

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SANDBOX_COOKIE cookie
ENV CCAR_IP localhost
ENV CCAR_PORT 8083

# install python dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# gunicorn

EXPOSE 6100
#CMD ["gunicorn", "--bind", "0.0.0.0:6100","--config", "gunicorn-cfg.py", "run:app"]
CMD ["gunicorn", "--config", "gunicorn-cfg.py", "run:app"]