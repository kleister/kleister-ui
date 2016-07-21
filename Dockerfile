FROM alpine:edge

RUN apk update && \
  apk add \
    ca-certificates && \
  rm -rf \
    /var/cache/apk/*

ADD bin/kleister-ui /usr/bin/
ENTRYPOINT ["/usr/bin/kleister-ui"]
CMD ["server"]
