FROM webhippie/alpine:latest

LABEL maintainer="Thomas Boerger <thomas@webhippie.de>" \
  org.label-schema.name="Kleister UI" \
  org.label-schema.vendor="Thomas Boerger" \
  org.label-schema.schema-version="1.0"

EXPOSE 9000 80 443
VOLUME ["/var/lib/kleister"]

ENV KLEISTER_UI_ASSETS /usr/share/kleister
ENV KLEISTER_UI_STORAGE /var/lib/kleister

ENTRYPOINT ["/usr/bin/kleister-ui"]
CMD ["server"]

RUN apk add --no-cache ca-certificates mailcap

COPY dist/static /usr/share/kleister
COPY dist/binaries/kleister-ui-*-linux-amd64 /usr/bin/kleister-ui
