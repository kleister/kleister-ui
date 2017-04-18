FROM alpine:edge
MAINTAINER Thomas Boerger <thomas@webhippie.de>

EXPOSE 9000
VOLUME ["/var/lib/kleister"]

RUN apk update && \
  apk add \
    ca-certificates \
    bash && \
  rm -rf \
    /var/cache/apk/* && \
  addgroup \
    -g 1000 \
    kleister && \
  adduser -D \
    -h /var/lib/kleister \
    -s /bin/bash \
    -G kleister \
    -u 1000 \
    kleister

COPY kleister-ui /usr/bin/

ENV KLEISTER_UI_STORAGE /var/lib/kleister

USER kleister
ENTRYPOINT ["/usr/bin/kleister-ui"]
CMD ["server"]
