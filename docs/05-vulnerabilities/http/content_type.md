---
sidebar_position: 3
title: Content type
---

# Content type

## Description

The Content-Type header is not set to application/json.
GraphQL APIs should always return a JSON response, according to the GraphQL specification.

## Remediation

Ensure that the Content-Type header is set to application/json.


## Configuration

> CheckId: `http/content_type`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "http/content_type": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**
- OWASP: **[A07:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa7-security-misconfiguration.md)**

- CWE
  - **668**
  - **1295**
- WASC: **14**








## References

https://spec.graphql.org/draft/#sec-Serialization-Format