FROM alpine:edge
MAINTAINER Thomas Boerger <thomas@webhippie.de>

EXPOSE 9000

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
    -h /home/kleister \
    -s /bin/bash \
    -G kleister \
    -u 1000 \
    kleister

COPY bin/kleister-ui /usr/bin/

USER kleister
ENTRYPOINT ["/usr/bin/kleister-ui"]
CMD ["server"]
