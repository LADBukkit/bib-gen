const STYLES = {
    "MLA 9": {
        "Monograph": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "title", "title": "Title"},
                {"type": "divider"},

                {"name": "c1_first_name", "title": "Contributor 1: First Name"},
                {"name": "c1_last_name", "title": "Contributor 1: Last Name"},
                {"name": "c2_first_name", "title": "Contributor 2: First Name"},
                {"name": "c2_last_name", "title": "Contributor 2: Last Name"},
                {"name": "contributor_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "version", "title": "Version"},
                {"name": "number", "title": "Number"},
                {"name": "publisher", "title": "Publisher"},
                {"name": "pub_date", "title": "Publication Date"},
                {"type": "divider"},

                {"name": "database", "title": "Database"},
                {"name": "url", "title": "URL"},
                {"name": "doi", "title": "DOI"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        , and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                    .
                {{~/if~}}
                {{~#if title }}
                    <i>{{ title }}</i>.
                {{~/if~}}

                {{~#if c1_last_name }}
                    translated by {{ c1_first_name }} {{ c1_last_name }}
                    {{~#if c2_last_name }}
                        , and {{ c2_first_name }} {{ c2_last_name }}
                    {{~/if~}}
                    {{~#if contributor_et_al ~}}
                        , et. al.
                    {{~/if~}}
                    ,
                {{~/if~}}
                {{~#if version }}
                    {{ version }} ed.,
                {{~/if~}}
                {{~#if number }}
                    Vol. {{ number }},
                {{~/if~}}
                {{~#if publisher }}
                    {{ publisher }},
                {{~/if~}}
                {{~#if pub_date }}
                    {{ pub_date }}.
                {{~/if~}}

                {{~#if database }}
                    <i>{{ database }}</i>,
                    {{~#if url }}
                        {{ url }}.
                    {{~else if doi }}
                        doi: {{ doi }}.
                    {{~/if~}}
                {{~/if~}}
            `
        },
        "Contribution - Anthology/Collection": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "title", "title": "Title"},
                {"name": "collection_title", "title": "Collection Title"},
                {"type": "divider"},

                {"name": "c1_first_name", "title": "Contributor 1: First Name"},
                {"name": "c1_last_name", "title": "Contributor 1: Last Name"},
                {"name": "c2_first_name", "title": "Contributor 2: First Name"},
                {"name": "c2_last_name", "title": "Contributor 2: Last Name"},
                {"name": "contributor_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "version", "title": "Version"},
                {"name": "number", "title": "Number"},
                {"name": "publisher", "title": "Publisher"},
                {"name": "pub_date", "title": "Publication Date"},
                {"name": "page_from", "title": "Page From"},
                {"name": "page_to", "title": "Page To"},
                {"type": "divider"},

                {"name": "database", "title": "Database"},
                {"name": "url", "title": "URL"},
                {"name": "doi", "title": "DOI"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        , and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                    .
                {{~/if~}}
                {{~#if title }}
                    &ldquo;{{ title }}.&rdquo;
                {{~/if~}}
                {{~#if collection_title }}
                    <i>{{ collection_title }}</i>,
                {{~/if~}}

                {{~#if c1_last_name }}
                    edited by {{ c1_first_name }} {{ c1_last_name }}
                    {{~#if c2_last_name }}
                        , and {{ c2_first_name }} {{ c2_last_name }}
                    {{~/if~}}
                    {{~#if contributor_et_al ~}}
                        , et. al.
                    {{~/if~}}
                    ,
                {{~/if~}}
                {{~#if version }}
                    {{ version }} ed.,
                {{~/if~}}
                {{~#if number }}
                    Vol. {{ number }},
                {{~/if~}}
                {{~#if publisher }}
                    {{ publisher }},
                {{~/if~}}
                {{~#if pub_date }}
                    {{ pub_date }},
                {{~/if~}}
                {{~#if page_from }}
                    {{~#if page_to ~}}
                        pp. {{ page_from }}&ndash;{{ page_to }}
                    {{~else~}}
                        p. {{ page_from }}
                    {{~/if~}}
                    .
                {{~/if~}}

                {{~#if database }}
                    <i>{{ database }}</i>,
                    {{~#if url }}
                        {{ url }}.
                    {{~else if doi }}
                        doi: {{ doi }}.
                    {{~/if~}}
                {{~/if~}}
            `
        },
        "Journal Article": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "title", "title": "Title"},
                {"name": "journal_title", "title": "Journal Title"},
                {"type": "divider"},

                {"name": "volume", "title": "Volume"},
                {"name": "number", "title": "Number"},
                {"name": "pub_date", "title": "Publication Date"},
                {"name": "page_from", "title": "Page From"},
                {"name": "page_to", "title": "Page To"},
                {"type": "divider"},

                {"name": "database", "title": "Database"},
                {"name": "url", "title": "URL"},
                {"name": "doi", "title": "DOI"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        , and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                    .
                {{~/if~}}
                {{~#if title }}
                    &ldquo;{{ title }}.&rdquo;
                {{~/if~}}
                {{~#if journal_title }}
                    <i>{{ journal_title }}</i>,
                {{~/if~}}

                {{~#if volume }}
                    vol. {{ volume }},
                {{~/if~}}
                {{~#if number }}
                    no. {{ number }},
                {{~/if~}}
                {{~#if pub_date }}
                    {{ pub_date }},
                {{~/if~}}
                {{~#if page_from }}
                    {{~#if page_to ~}}
                        pp. {{ page_from }}&ndash;{{ page_to }}
                    {{~else~}}
                        p. {{ page_from }}
                    {{~/if~}}
                    .
                {{~/if~}}

                {{~#if database }}
                    <i>{{ database }}</i>,
                    {{~#if url }}
                        {{ url }}.
                    {{~else if doi }}
                        doi: {{ doi }}.
                    {{~/if~}}
                {{~/if~}}
            `
        },
        "Movie": {
            "parameters": [
                {"name": "episode", "title": "Episode"},
                {"name": "movie", "title": "Movie"},
                {"type": "divider"},

                {"name": "creator", "title": "Creator"},
                {"name": "performer", "title": "Performer"},
                {"type": "divider"},

                {"name": "publisher", "title": "Publisher"},
                {"name": "pub_date", "title": "Publication Date"},
                {"type": "divider"},

                {"name": "database", "title": "Platform"},
                {"name": "url", "title": "URL"},
                {"name": "doi", "title": "DOI"},
            ],
            "template": `
                {{~#if episode }}
                    &ldquo;{{ episode }}&rdquo;
                {{~/if~}}
                {{~#if movie }}
                    <i>{{ movie }}</i>,
                {{~/if~}}

                {{~#if creator }}
                    created by {{ creator }},
                {{~/if~}}
                {{~#if performer }}
                    performed by {{ performer }},
                {{~/if~}}
                {{~#if publisher }}
                    {{ publisher }},
                {{~/if~}}
                {{~#if pub_date }}
                    {{ pub_date }}.
                {{~/if~}}

                {{~#if database }}
                    <i>{{ database }}</i>,
                    {{~#if url }}
                        {{ url }}.
                    {{~else if doi }}
                        doi: {{ doi }}.
                    {{~/if~}}
                {{~/if~}}
            `
        },
        "Website": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "title", "title": "Posting Title"},
                {"name": "website_title", "title": "Website Title"},
                {"type": "divider"},

                {"name": "publisher", "title": "Publisher"},
                {"name": "pub_date", "title": "Publication Date"},
                {"name": "url", "title": "URL"},
                {"type": "divider"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        , and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                    .
                {{~/if~}}
                {{~#if title }}
                    &ldquo;{{ title }}.&rdquo;
                {{~/if~}}
                {{~#if website_title }}
                    <i>{{ website_title }}</i>,
                {{~/if~}}

                {{~#if publisher }}
                    {{ publisher }},
                {{~/if~}}
                {{~#if pub_date }}
                    {{ pub_date }},
                {{~/if~}}
                {{~#if url }}
                    {{ url }}.
                {{~/if~}}
            `
        },
    },
    "Linguistics": {
        "Monograph": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "pub_date", "title": "Publication Date"},
                {"name": "title", "title": "Title"},
                {"type": "divider"},

                {"name": "place", "title": "Place"},
                {"name": "publisher", "title": "Publisher"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                         and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                {{~/if~}}

                {{~#if pub_date }}
                    ({{ pub_date }}).
                {{~/if~}}
                {{~#if title }}
                    <i>{{ title }}</i>.
                {{~/if~}}

                {{~#if place }}
                    {{ place }}:
                {{~/if~}}
                {{~#if publisher }}
                    {{ publisher }}.
                {{~/if~}}
            `
        },
        "Journal Article": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "pub_date", "title": "Publication Date"},
                {"name": "title", "title": "Title"},
                {"name": "pub_title", "title": "Publication Title"},
                {"type": "divider"},

                {"name": "volume", "title": "Volume"},
                {"name": "issue", "title": "Issue"},
                {"name": "page_from", "title": "Page From"},
                {"name": "page_to", "title": "Page To"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                {{~/if~}}

                {{~#if pub_date }}
                    ({{ pub_date }}).
                {{~/if~}}
                {{~#if title }}
                    &ldquo;{{ title }}&rdquo;,
                {{~/if~}}
                {{~#if pub_title }}
                    <i>{{ pub_title }}</i>
                {{~/if~}}

                {{~#if volume }}
                    {{ volume }}
                    {{~#if issue ~}}
                        ({{ issue }})
                    {{~/if~}}
                    :
                {{~/if~}}
                {{~#if page_from }}
                    {{ page_from }}
                    {{~#if page_to ~}}
                        &ndash;{{ page_to }}
                    {{~/if~}}
                    .
                {{~/if~}}
            `
        },
        "Essay in a Collection": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "pub_date", "title": "Publication Date"},
                {"name": "title", "title": "Title"},
                {"name": "pub_title", "title": "Publication Title"},
                {"type": "divider"},

                {"name": "c1_first_name", "title": "Editor 1: First Name"},
                {"name": "c1_last_name", "title": "Editor 1: Last Name"},
                {"name": "c2_first_name", "title": "Editor 2: First Name"},
                {"name": "c2_last_name", "title": "Editor 2: Last Name"},
                {"name": "contributor_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "place", "title": "Place"},
                {"name": "publisher", "title": "Publisher"},
                {"name": "page_from", "title": "Page From"},
                {"name": "page_to", "title": "Page To"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                {{~/if~}}

                {{~#if pub_date }}
                    ({{ pub_date }}).
                {{~/if~}}
                {{~#if title }}
                    &ldquo;{{ title }}&rdquo;,
                {{~/if~}}

                {{~#if c1_last_name ~}}
                    {{ c1_first_name }} {{ c1_last_name}} 
                    {{~#if c2_last_name }}
                        and {{ c2_first_name }} {{ c2_last_name }}
                    {{~/if~}}
                    {{~#if contributor_et_al ~}}
                        , et. al
                    {{~/if~}}
                    , ed
                    {{~#if c2_last_name ~}}s{{~/if~}}
                    {{~#if contributor_et_al ~}}s{{~/if~}}
                    .,
                {{~/if~}}

                {{~#if pub_title }}
                    <i>{{ pub_title }}</i>.
                {{~/if~}}

                {{~#if place }}
                    {{ place }}:
                {{~/if~}}
                {{~#if publisher }}
                    {{ publisher }},
                {{~/if~}}
                {{~#if page_from }}
                    {{ page_from }}
                    {{~#if page_to ~}}
                        &ndash;{{ page_to }}
                    {{~/if~}}
                    .
                {{~/if~}}
            `
        },
        "Web Source": {
            "parameters": [
                {"name": "a1_first_name", "title": "Author 1: First Name"},
                {"name": "a1_last_name", "title": "Author 1: Last Name"},
                {"name": "a2_first_name", "title": "Author 2: First Name"},
                {"name": "a2_last_name", "title": "Author 2: Last Name"},
                {"name": "author_et_al", "title": "Et al.", "type": "check"},
                {"type": "divider"},

                {"name": "title", "title": "Title"},
                {"name": "pub_title", "title": "Website Title"},
                {"type": "divider"},

                {"name": "url", "title": "URL"},
                {"name": "date", "title": "Access Date"},
            ],
            "template": `
                {{~#if a1_last_name ~}}
                    {{ a1_last_name}}, {{ a1_first_name }}
                    {{~#if a2_last_name }}
                        and {{ a2_first_name }} {{ a2_last_name }}
                    {{~/if~}}
                    {{~#if author_et_al ~}}
                        , et. al
                    {{~/if~}}
                    .
                {{~/if~}}

                {{~#if title }}
                    &ldquo;{{ title }}&rdquo;,
                {{~/if~}}
                {{~#if pub_title }}
                    {{ pub_title }}.
                {{~/if~}}

                {{~#if url }}
                    URL: {{ url }}
                    {{~#if date }}
                        ({{ date }})
                    {{~/if~}}
                    .
                {{~/if~}}
            `
        }
    }
}