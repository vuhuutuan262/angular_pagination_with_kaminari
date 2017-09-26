FROM ruby:2.4.1-slim-stretch

ENV LANG C.UTF-8
ENV APP_DIR /app
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

RUN apt-get update
RUN apt-get install -y --no-install-recommends build-essential curl nodejs git libmariadbclient-dev-compat gnupg
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - && apt-get install -yq nodejs
RUN apt-get clean
RUN cp -p /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

COPY Gemfile /cache/Gemfile
COPY Gemfile.lock /cache/Gemfile.lock
COPY package.json /cache/package.json
COPY frontend /cache/frontend

RUN echo "gem: --no-rdoc --no-ri" > ~/.gemrc
RUN cd /cache && bundle install -j4
RUN npm install -g @angular/cli
RUN cd /cache && npm install -g yarn && yarn install && rm package.json

RUN curl -o /usr/bin/framgia-ci https://raw.githubusercontent.com/framgia/ci-report-tool/master/dist/framgia-ci && chmod +x /usr/bin/framgia-ci

COPY . $APP_DIR

RUN chmod +x $APP_DIR/scripts/*
RUN chmod +x $APP_DIR/bin/*

CMD ["scripts/server"]
