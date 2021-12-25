---
title: From JSON to MD with GHA
date: 2021-12-25
description: Generate a Markdown Table from a JSON with a GitHub Action
tags:
  - github
  - json
  - markdown
---

## The Markdown

In your Markdown, say `README.md`, add the following comment to indicate where the generation should be:

```html
<!-- MARKDOWN-AUTO-DOCS:START (JSON_TO_HTML_TABLE:src=./data.json) -->
<!-- MARKDOWN-AUTO-DOCS:END -->
```

## The JSON

Add a `data.json` with whatever data you want to insert in your Markdown:

```json
[
    {
        "Organization": "Elasticsearch",
        "Project": "https://github.com/elastic/elasticsearch",
        "Website": "https://www.elastic.co/",
        "License": "Elastic License 2.0"
    },
    {
        "Organization": "Redhat",
        "Project": "https://github.com/openshift/origin",
        "Website": "http://www.openshift.org/",
        "License": "Apache-2.0 License"
    },
    {
        "Organization": "HashiCorp",
        "Project": "https://www.terraform.io/",
        "Website": "https://github.com/hashicorp/terraform",
        "License": "MPL-2.0 License"
    }
]
```

## The Action 

- Create a `.github/workflows/` directory in your repository if this directory does not already exist.
- In the `.github/workflows/` directory, create a file named `markdown-from-json.yml`.
- Copy the following YAML content into the `markdown-from-json.yml` file:

```yaml
name: markdown-from-json

on: [push]

jobs:        
  auto-update-readme:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: Markdown autodocs
          uses: dineshsonachalam/markdown-autodocs@v1.0.3
          with:
            # Optional output file paths, defaults to '[./README.md]'.
            output_file_paths: '[./README.md]'

            # Categories to automatically sync or transform its content in the markdown files.
            # Defaults to '[code-block,json-to-html-table,workflow-artifact-table]'
            categories: 'json-to-html-table'
```

And voilà! You can check your Markdown again. It should be filled with a generated table.

source:
* <https://github.com/dineshsonachalam/repo-using-markdown-autodocs>
* <https://github.com/dineshsonachalam/markdown-autodocs>
* <https://dev.to/dineshsonachalam/a-github-action-that-automatically-generates-updates-markdown-content-like-your-readme-md-from-external-or-remote-files-hp7>
* <https://docs.github.com/en/actions/quickstart>
