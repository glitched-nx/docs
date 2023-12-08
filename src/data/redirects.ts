const redirectsData = [
    {
        source: "/dev/roadmap",
        destination: "https://sourcegraph.com/direction",
        permanent: true
    },
    {
        source: "/dev/code_reviews",
        destination: "https://docs.sourcegraph.com/dev/background-information/code_reviews",
        permanent: true
    },
    {
        source: "/dev/conduct",
        destination: "https://sourcegraph.com/community/code_of_conduct",
        permanent: true
    },
    {
        source: "/dev/devrel_release_issue_template",
        destination: "https://sourcegraph.com/handbook/marketing/developer-relations/release_issue_template",
        permanent: true
    },
    {
        source: "/dev/documentation/separate_website",
        destination: "https://sourcegraph.com/handbook/engineering/distribution/separate_website",
        permanent: true
    },
    {
        source: "/dev/documentation/site",
        destination: "https://sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website",
        permanent: true
    },
    {
        source: "/dev/documentation/structure",
        destination: "https://sourcegraph.com/handbook/engineering/product_documentation",
        permanent: true
    },
    {
        source: "/dev/documentation/style_guide",
        destination: "https://sourcegraph.com/handbook/engineering/product_documentation",
        permanent: true
    },
    {
        source: "/dev/faq",
        destination: "https://sourcegraph.com/community/faq",
        permanent: true
    },
    {
        source: "/dev/go_style_guide",
        destination: "https://docs.sourcegraph.com/dev/background-information/languages/go",
        permanent: true
    },
    {
        source: "/dev/incidents",
        destination: "https://sourcegraph.com/handbook/engineering/incidents",
        permanent: true
    },
    {
        source: "/dev/open_source_open_company",
        destination: "https://sourcegraph.com/company#sourcegraph-open-product-open-company-open-source",
        permanent: true
    },
    {
        source: "/dev/patch_release_issue_template",
        destination: "https://sourcegraph.com/handbook/engineering/releases/patch_release_issue_template",
        permanent: true
    },
    {
        source: "/dev/product",
        destination: "https://sourcegraph.com/handbook/product",
        permanent: true
    },
    {
        source: "/dev/product/personas",
        destination: "https://sourcegraph.com/handbook/marketing/personas",
        permanent: true
    },
    {
        source: "/dev/release_issue_template",
        destination: "https://sourcegraph.com/handbook/engineering/releases/release_issue_template",
        permanent: true
    },
    {
        source: "/dev/releases",
        destination: "https://sourcegraph.com/handbook/engineering/releases",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_0",
        destination: "https://sourcegraph.com/handbook/retrospectives/3_0",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_0_beta",
        destination: "https://sourcegraph.com/handbook/retrospectives/3_0_beta",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_2",
        destination: "https://sourcegraph.com/retrospectives/3_2",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_3",
        destination: "https://sourcegraph.com/retrospectives/3_3",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_4",
        destination: "https://sourcegraph.com/retrospectives/3_4",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_5",
        destination: "https://sourcegraph.com/retrospectives/3_5",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_6",
        destination: "https://sourcegraph.com/retrospectives/3_6",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_7",
        destination: "https://sourcegraph.com/retrospectives/3_7",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_8",
        destination: "https://sourcegraph.com/retrospectives/3_8",
        permanent: true
    },
    {
        source: "/dev/retrospectives/3_9",
        destination: "https://sourcegraph.com/retrospectives/3_9",
        permanent: true
    },
    {
        source: "/dev/retrospectives/customer_license_expiration",
        destination: "https://sourcegraph.com/retrospectives/customer_license_expiration",
        permanent: true
    },
    {
        source: "/dev/retrospectives",
        destination: "https://sourcegraph.com/retrospectives",
        permanent: true
    },
    {
        source: "/dev/retrospectives/postgresql_upgrade",
        destination: "https://sourcegraph.com/retrospectives/postgresql_upgrade",
        permanent: true
    },
    {
        source: "/dev/rfcs",
        destination: "https://sourcegraph.com/handbook/communication/rfcs",
        permanent: true
    },
    {
        source: "/dev/style_guide",
        destination: "https://sourcegraph.com/handbook/communication/style_guide",
        permanent: true
    },
    {
        source: "/direction",
        destination: "https://sourcegraph.com/direction",
        permanent: true
    },
    {
        source: "/direction/secure",
        destination: "https://sourcegraph.com/direction",
        permanent: true
    },
    {
        source: "/graphbook/communication",
        destination: "https://sourcegraph.com/handbook",
        permanent: true
    },
    {
        source: "/graphbook",
        destination: "https://sourcegraph.com/handbook",
        permanent: true
    },
    {
        source: "/team/graphbook",
        destination: "https://sourcegraph.com/handbook",
        permanent: true
    },
    {
        source: "/team/graphbook/team_meeting",
        destination: "https://sourcegraph.com/handbook/communication/company_meeting",
        permanent: true
    },
    {
        source: "/team/graphbook/travel",
        destination: "https://sourcegraph.com/handbook/people-ops/travel",
        permanent: true
    },
    {
        source: "/team/gtm/devrel",
        destination: "https://sourcegraph.com/handbook/marketing/developer-relations",
        permanent: true
    },
    {
        source: "/team/gtm",
        destination: "https://sourcegraph.com/handbook/sales",
        permanent: true
    },
    {
        source: "/team/gtm/support/diagnostics",
        destination: "https://sourcegraph.com/handbook/support/diagnostics",
        permanent: true
    },
    {
        source: "/team/gtm/support",
        destination: "https://sourcegraph.com/handbook/support",
        permanent: true
    },
    {
        source: "/team",
        destination: "https://sourcegraph.com/handbook",
        permanent: true
    },
    {
        source: "/team/product-dev/documentation",
        destination: "https://sourcegraph.com/handbook/engineering/product_documentation",
        permanent: true
    },
    {
        source: "/team/product-dev/documentation/separate_website",
        destination: "https://sourcegraph.com/handbook/engineering/distribution/separate_website",
        permanent: true
    },
    {
        source: "/team/product-dev/documentation/site",
        destination: "https://sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website",
        permanent: true
    },
    {
        source: "/team/product-dev/documentation/structure",
        destination: "https://sourcegraph.com/handbook/engineering/product_documentation",
        permanent: true
    },
    {
        source: "/team/product-dev/documentation/style_guide",
        destination: "https://sourcegraph.com/handbook/communication/style_guide",
        permanent: true
    },
    {
        source: "/team/product-dev/incidents",
        destination: "https://sourcegraph.com/handbook/engineering/incidents",
        permanent: true
    },
    {
        source: "/team/product-dev",
        destination: "https://sourcegraph.com/handbook/engineering",
        permanent: true
    },
    {
        source: "/team/product-dev/open_source_open_company",
        destination: "https://sourcegraph.com/company#sourcegraph-open-product-open-company-open-source",
        permanent: true
    },
    {
        source: "/team/product-dev/product",
        destination: "https://sourcegraph.com/handbook/product",
        permanent: true
    },
    {
        source: "/team/product-dev/product/personas",
        destination: "https://sourcegraph.com/handbook/marketing/personas",
        permanent: true
    },
    {
        source: "/team/product-dev/releases",
        destination: "https://sourcegraph.com/handbook/engineering/releases",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_0",
        destination: "https://sourcegraph.com/retrospectives/3_0",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_0_beta",
        destination: "https://sourcegraph.com/retrospectives/3_0_beta",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_2",
        destination: "https://sourcegraph.com/retrospectives/3_2",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_3",
        destination: "https://sourcegraph.com/retrospectives/3_3",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_4",
        destination: "https://sourcegraph.com/retrospectives/3_4",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_5",
        destination: "https://sourcegraph.com/retrospectives/3_5",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_6",
        destination: "https://sourcegraph.com/retrospectives/3_6",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_7",
        destination: "https://sourcegraph.com/retrospectives/3_7",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_8",
        destination: "https://sourcegraph.com/retrospectives/3_8",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/3_9",
        destination: "https://sourcegraph.com/retrospectives/3_9",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/customer_license_expiration",
        destination: "https://sourcegraph.com/retrospectives/customer_license_expiration",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives",
        destination: "https://sourcegraph.com/retrospectives",
        permanent: true
    },
    {
        source: "/team/product-dev/retrospectives/postgresql_upgrade",
        destination: "https://sourcegraph.com/retrospectives/postgresql_upgrade",
        permanent: true
    },
    {
        source: "/team/product-dev/rfcs",
        destination: "https://sourcegraph.com/handbook/communication/rfcs",
        permanent: true
    },
    {
        source: "/team/roadmap",
        destination: "https://sourcegraph.com/direction",
        permanent: true
    },
    {
        source: "/team/style_guide",
        destination: "https://sourcegraph.com/handbook/communication/style_guide",
        permanent: true
    },
    {
        source: "/adopt/comp",
        destination: "https://sourcegraph.com/workflow",
        permanent: true
    },
    {
        source: "/admin/auth/saml_with_microsoft_adfs",
        destination: "/admin/auth/saml/microsoft_adfs",
        permanent: true
    },
    {
        source: "/admin/config/critical_config",
        destination: "/admin/migration/3_11",
        permanent: true
    },
    {
        source: "/admin/external_service/bitbucketserver",
        destination: "/integration/bitbucket_server",
        permanent: true
    },
    {
        source: "/admin/install/cluster.md",
        destination: "/admin/deploy/index.md",
        permanent: true
    },
    {
        source: "/admin/monitoring",
        destination: "/admin/observability",
        permanent: true
    },
    {
        source: "/admin/monitoring/reporting_search_timeouts",
        destination: "/admin/observability/troubleshooting#scenario-search-timeouts",
        permanent: true
    },
    {
        source: "/admin/monitoring/metrics_reference",
        destination: "/admin/observability/metrics_guide",
        permanent: true
    },
    {
        source: "/admin/monitoring/slack_alert_channel",
        destination: "/admin/observability/alerting#set-up-alerts-in-grafana",
        permanent: true
    },
    {
        source: "/admin/monitoring_and_tracing",
        destination: "/admin/observability",
        permanent: true
    },
    {
        source: "/integration/google_gsuite",
        destination: "/integration/google_workspace",
        permanent: true
    },
    {
        source: "/dev/architecture/life-of-a-search-query",
        destination: "/dev/background-information/architecture/life-of-a-search-query",
        permanent: true
    },
    {
        source: "/dev/architecture/architecture.dot",
        destination: "/dev/background-information/architecture/architecture.dot",
        permanent: true
    },
    {
        source: "/dev/architecture/life-of-a-ping",
        destination: "/dev/background-information/architecture/life-of-a-ping",
        permanent: true
    },
    {
        source: "/dev/architecture/life-of-a-repository",
        destination: "/dev/background-information/architecture/life-of-a-repository",
        permanent: true
    },
    {
        source: "/dev/architecture/search-pagination",
        destination: "/dev/background-information/architecture/search-pagination",
        permanent: true
    },
    {
        source: "/dev/architecture/architecture.dot",
        destination: "/dev/background-information/architecture/architecture.dot",
        permanent: true
    },
    {
        source: "/dev/architecture/architecture.svg",
        destination: "/dev/background-information/architecture/architecture.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/architecture",
        destination: "/dev/background-information/codeintel/architecture",
        permanent: true
    },
    {
        source: "/dev/codeintel/deployment",
        destination: "/dev/background-information/codeintel/deployment",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/architecture.dot",
        destination: "/dev/background-information/codeintel/diagrams/architecture.dot",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/architecture.svg",
        destination: "/dev/background-information/codeintel/diagrams/architecture.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/definitions.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/definitions.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/definitions.svg",
        destination: "/dev/background-information/codeintel/diagrams/definitions.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-definitions.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/extension-definitions.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-definitions.svg",
        destination: "/dev/background-information/codeintel/diagrams/extension-definitions.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-hover.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/extension-hover.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-hover.svg",
        destination: "/dev/background-information/codeintel/diagrams/extension-hover.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-references.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/extension-references.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/extension-references.svg",
        destination: "/dev/background-information/codeintel/diagrams/extension-references.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/hover.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/hover.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/hover.svg",
        destination: "/dev/background-information/codeintel/diagrams/hover.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/references.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/references.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/references.svg",
        destination: "/dev/background-information/codeintel/diagrams/references.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/resolve-page.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/resolve-page.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/resolve-page.svg",
        destination: "/dev/background-information/codeintel/diagrams/resolve-page.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/upload.mermaid",
        destination: "/dev/background-information/codeintel/diagrams/upload.mermaid",
        permanent: true
    },
    {
        source: "/dev/codeintel/diagrams/upload.svg",
        destination: "/dev/background-information/codeintel/diagrams/upload.svg",
        permanent: true
    },
    {
        source: "/dev/codeintel/extensions",
        destination: "/dev/background-information/codeintel/extensions",
        permanent: true
    },
    {
        source: "/dev/codeintel/index",
        destination: "/dev/background-information/codeintel/index",
        permanent: true
    },
    {
        source: "/dev/codeintel/queries",
        destination: "/dev/background-information/codeintel/queries",
        permanent: true
    },
    {
        source: "/dev/codeintel/uploads",
        destination: "/dev/background-information/codeintel/uploads",
        permanent: true
    },
    {
        source: "/dev/graphql_api",
        destination: "/dev/background-information/graphql_api",
        permanent: true
    },
    {
        source: "/dev/observability",
        destination: "/dev/background-information/observability",
        permanent: true
    },
    {
        source: "/dev/postgresql",
        destination: "/dev/background-information/postgresql",
        permanent: true
    },
    {
        source: "/dev/renovate",
        destination: "/dev/background-information/renovate",
        permanent: true
    },
    {
        source: "/dev/tech_stack",
        destination: "/dev/background-information/tech_stack",
        permanent: true
    },
    {
        source: "/dev/telemetry",
        destination: "/dev/background-information/telemetry",
        permanent: true
    },
    {
        source: "/dev/testing",
        destination: "/dev/background-information/testing",
        permanent: true
    },
    {
        source: "/dev/web/build",
        destination: "/dev/background-information/web/build",
        permanent: true
    },
    {
        source: "/dev/code_host_integrations",
        destination: "/dev/background-information/web/code_host_integrations",
        permanent: true
    },
    {
        source: "/dev/web/graphql",
        destination: "/dev/background-information/web/graphql",
        permanent: true
    },
    {
        source: "/dev/web/index",
        destination: "/dev/background-information/web/index",
        permanent: true
    },
    {
        source: "/dev/web/web_app",
        destination: "/dev/background-information/web/web_app",
        permanent: true
    },
    {
        source: "/dev/phabricator_gitolite",
        destination: "/dev/how-to/configure_phabricator_gitolite",
        permanent: true
    },
    {
        source: "/dev/documentation",
        destination: "/dev/how-to/documentation_implementation",
        permanent: true
    },
    {
        source: "/dev/zoekt",
        destination: "/dev/how-to/zoekt_local_dev",
        permanent: true
    },
    {
        source: "/user/search/examples",
        destination: "/code_search/tutorials/examples",
        permanent: true
    },
    {
        source: "/user/search/queries",
        destination: "/code_search/reference/queries",
        permanent: true
    },
    {
        source: "/user/search/language",
        destination: "/code_search/reference/language",
        permanent: true
    },
    {
        source: "/user/search/structural",
        destination: "/code_search/reference/structural",
        permanent: true
    },
    {
        source: "/user/search/opengrok",
        destination: "/code_search/how-to/opengrok",
        permanent: true
    },
    {
        source: "/user/search/saved_searches",
        destination: "/code_search/how-to/saved_searches",
        permanent: true
    },
    {
        source: "/user/search/scopes",
        destination: "/code_search/how-to/scopes",
        permanent: true
    },
    {
        source: "/user/code_intelligence/lsif_quickstart",
        destination: "/user/code_intelligence/how-to/index_other_languages",
        permanent: true
    },
    {
        source: "/user/code_intelligence/basic_code_intelligence",
        destination: "/user/code_intelligence/explanations/search_based_code_intelligence",
        permanent: true
    },
    {
        source: "/user/code_intelligence/features",
        destination: "/user/code_intelligence/explanations/features",
        permanent: true
    },
    {
        source: "/user/code_intelligence/lsif",
        destination: "/user/code_intelligence/explanations/precise_code_intelligence",
        permanent: true
    },
    {
        source: "/user/code_intelligence/precise_code_intelligence",
        destination: "/user/code_intelligence/explanations/precise_code_intelligence",
        permanent: true
    },
    {
        source: "/user/code_intelligence/writing_an_indexer",
        destination: "/user/code_intelligence/explanations/writing_an_indexer",
        permanent: true
    },
    {
        source: "/user/code_intelligence/adding_lsif_to_many_repos",
        destination: "/user/code_intelligence/how-to/adding_lsif_to_many_repos",
        permanent: true
    },
    {
        source: "/user/code_intelligence/adding_lsif_to_workflows",
        destination: "/user/code_intelligence/how-to/adding_lsif_to_workflows",
        permanent: true
    },
    {
        source: "/user/code_intelligence/languages/go",
        destination: "/user/code_intelligence/how-to/index_a_go_repository",
        permanent: true
    },
    {
        source: "/user/code_intelligence/languages/typescript_and_javascript",
        destination: "/user/code_intelligence/how-to/index_a_typescript_and_javascript_repository",
        permanent: true
    },
    {
        source: "/user/code_intelligence/explanations/basic_code_intelligence",
        destination: "/code_intelligence/explanations/search_based_code_intelligence",
        permanent: true
    },
    {
        source: "/user/code_intelligence/explanations/features",
        destination: "/code_intelligence/explanations/features",
        permanent: true
    },
    {
        source: "/user/code_intelligence/explanations/precise_code_intelligence",
        destination: "/code_intelligence/explanations/precise_code_intelligence",
        permanent: true
    },
    {
        source: "/user/code_intelligence/explanations/writing_an_indexer",
        destination: "/code_intelligence/explanations/writing_an_indexer",
        permanent: true
    },
    {
        source: "/user/code_intelligence/how-to/adding_lsif_to_many_repos",
        destination: "/code_intelligence/how-to/adding_lsif_to_many_repos",
        permanent: true
    },
    {
        source: "/user/code_intelligence/how-to/adding_lsif_to_workflows",
        destination: "/code_intelligence/how-to/adding_lsif_to_workflows",
        permanent: true
    },
    {
        source: "/user/code_intelligence/how-to/index_a_go_repository",
        destination: "/code_intelligence/how-to/index_a_go_repository",
        permanent: true
    },
    {
        source: "/user/code_intelligence/how-to/index_a_typescript_and_javascript_repository",
        destination: "/code_intelligence/how-to/index_a_typescript_and_javascript_repository",
        permanent: true
    },
    {
        source: "/user/markdown",
        destination: "/admin/markdown",
        permanent: true
    },
    {
        source: "/user/organizations",
        destination: "/admin/organizations",
        permanent: true
    },
    {
        source: "/user/organizations/index",
        destination: "/admin/organizations",
        permanent: true
    },
    {
        source: "/user/usage_statistics",
        destination: "/admin/usage_statistics",
        permanent: true
    },
    {
        source: "/user/user_surveys",
        destination: "/admin/user_surveys",
        permanent: true
    },
    {
        source: "/user/repository/badges",
        destination: "/user/personalization/badges",
        permanent: true
    },
    {
        source: "/user/quick_links",
        destination: "/user/personalization/quick_links",
        permanent: true
    },
    {
        source: "/user/themes",
        destination: "/user/personalization/themes",
        permanent: true
    },
    {
        source: "/user/search",
        destination: "/code_search",
        permanent: true
    },
    {
        source: "/user/code_intelligence",
        destination: "/code_intelligence",
        permanent: true
    },
    {
        source: "/user",
        destination: "/getting-started",
        permanent: true
    },
    {
        source: "/user/automation",
        destination: "/batch_changes",
        permanent: true
    },
    {
        source: "/user/campaigns",
        destination: "/batch_changes",
        permanent: true
    },
    {
        source: "/user/campaigns/examples",
        destination: "/batch_changes/tutorials",
        permanent: true
    },
    {
        source: "/user/campaigns/managing_access",
        destination: "/batch_changes/explanations/permissions_in_batch_changes",
        permanent: true
    },
    {
        source: "/dev/campaigns_database_layout.dot",
        destination: "/dev/background-information/batch_changes/batch_changes_database_layout.dot",
        permanent: true
    },
    {
        source: "/dev/campaigns_database_layout.svg",
        destination: "/dev/background-information/batch_changes/batch_changes_database_layout.svg",
        permanent: true
    },
    {
        source: "/dev/campaigns_design",
        destination: "/dev/background-information/batch_changes/batch_changes_design",
        permanent: true
    },
    {
        source: "/dev/campaigns_development",
        destination: "/dev/background-information/batch_changes/index",
        permanent: true
    },
    {
        source: "/dev/automation_development",
        destination: "/dev/background-information/batch_changes/index",
        permanent: true
    },
    {
        source: "/campaigns/campaign_spec_yaml_reference",
        destination: "/campaigns/references/batch_spec_yaml_reference",
        permanent: true
    },
    {
        source: "/dev/background-information/campaigns/campaigns_database_layout.svg",
        destination: "/dev/background-information/batch_changes/batch_changes_database_layout.svg",
        permanent: true
    },
    {
        source: "/dev/background-information/campaigns/campaigns_database_layout.dot",
        destination: "/dev/background-information/batch_changes/batch_changes_database_layout.dot",
        permanent: true
    },
    {
        source: "/campaigns/explanations/how_src_executes_a_campaign_spec",
        destination: "/batch_changes/explanations/how_src_executes_a_batch_spec",
        permanent: true
    },
    {
        source: "/campaigns/explanations/reexecuting_campaign_specs_multiple_times",
        destination: "/batch_changes/explanations/reexecuting_batch_specs_multiple_times",
        permanent: true
    },
    {
        source: "/campaigns/explanations/permissions_in_batch_changes",
        destination: "/batch_changes/explanations/permissions_in_batch_changes",
        permanent: true
    },
    {
        source: "/campaigns/explanations/introduction_to_batch_changes",
        destination: "/batch_changes/explanations/introduction_to_batch_changes",
        permanent: true
    },
    {
        source: "/campaigns/explanations/batch_changes_design",
        destination: "/batch_changes/explanations/batch_changes_design",
        permanent: true
    },
    {
        source: "/campaigns/explanations",
        destination: "/batch_changes/explanations",
        permanent: true
    },
    {
        source: "/campaigns/references/requirements",
        destination: "/batch_changes/references/requirements",
        permanent: true
    },
    {
        source: "/campaigns/references/troubleshooting",
        destination: "/batch_changes/references/troubleshooting",
        permanent: true
    },
    {
        source: "/campaigns/references/name-change",
        destination: "/batch_changes/references/name-change",
        permanent: true
    },
    {
        source: "/campaigns/references/campaign_spec_yaml_reference",
        destination: "/batch_changes/references/batch_spec_yaml_reference",
        permanent: true
    },
    {
        source: "/campaigns/references/faq",
        destination: "/batch_changes/references/faq",
        permanent: true
    },
    {
        source: "/campaigns/references/campaign_spec_templating",
        destination: "/batch_changes/references/batch_spec_templating",
        permanent: true
    },
    {
        source: "/campaigns/references",
        destination: "/batch_changes/references",
        permanent: true
    },
    {
        source: "/campaigns/tutorials/update_base_images_in_dockerfiles",
        destination: "/batch_changes/tutorials/update_base_images_in_dockerfiles",
        permanent: true
    },
    {
        source: "/campaigns/tutorials/updating_go_import_statements",
        destination: "/batch_changes/tutorials/updating_go_import_statements",
        permanent: true
    },
    {
        source: "/campaigns/tutorials/refactor_go_comby",
        destination: "/batch_changes/tutorials/refactor_go_comby",
        permanent: true
    },
    {
        source: "/campaigns/tutorials/search_and_replace_specific_terms",
        destination: "/batch_changes/tutorials/search_and_replace_specific_terms",
        permanent: true
    },
    {
        source: "/campaigns/tutorials",
        destination: "/batch_changes/tutorials",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/creating_changesets_per_project_in_monorepos",
        destination: "/batch_changes/how-tos/creating_changesets_per_project_in_monorepos",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/handling_errored_changesets",
        destination: "/batch_changes/how-tos/handling_errored_changesets",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/creating_multiple_changesets_in_large_repositories",
        destination: "/batch_changes/how-tos/creating_multiple_changesets_in_large_repositories",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/site_admin_configuration",
        destination: "/batch_changes/how-tos/site_admin_configuration",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/publishing_changesets",
        destination: "/batch_changes/how-tos/publishing_changesets",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/viewing_batch_changes",
        destination: "/batch_changes/how-tos/viewing_batch_changes",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/updating_a_batch_change",
        destination: "/batch_changes/how-tos/updating_a_batch_change",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/configuring_user_credentials",
        destination: "/batch_changes/how-tos/configuring_user_credentials",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/closing_or_deleting_a_batch_change",
        destination: "/batch_changes/how-tos/closing_or_deleting_a_batch_change",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/creating_a_batch_change",
        destination: "/batch_changes/how-tos/creating_a_batch_change",
        permanent: true
    },
    {
        source: "/campaigns/how-tos/tracking_existing_changesets",
        destination: "/batch_changes/how-tos/tracking_existing_changesets",
        permanent: true
    },
    {
        source: "/campaigns/how-tos",
        destination: "/batch_changes/how-tos",
        permanent: true
    },
    {
        source: "/campaigns/quickstart",
        destination: "/batch_changes/quickstart",
        permanent: true
    },
    {
        source: "/campaigns",
        destination: "/batch_changes",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/apply",
        destination: "/cli/references/batch/apply",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/index",
        destination: "/cli/references/batch/index",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/new",
        destination: "/cli/references/batch/new",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/preview",
        destination: "/cli/references/batch/preview",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/repositories",
        destination: "/cli/references/batch/repositories",
        permanent: true
    },
    {
        source: "/cli/references/campaigns/validate",
        destination: "/cli/references/batch/validate",
        permanent: true
    },
    {
        source: "/cli/references/campaigns",
        destination: "/cli/references/batch",
        permanent: true
    },
    {
        source: "/batch_changes/how-tos/configuring_user_credentials",
        destination: "/batch_changes/how-tos/configuring_credentials",
        permanent: true
    },
    {
        source: "/batch-changes/references/troubleshooting",
        destination: "/batch_changes/references/troubleshooting",
        permanent: true
    },
    {
        source: "/dev/background-information/continuous_integration",
        destination: "/dev/background-information/ci",
        permanent: true
    },
    {
        source: "/dev/how-to/add_and_use_logging",
        destination: "/dev/how-to/add_logging",
        permanent: true
    },
    {
        source: "/admin/install",
        destination: "/admin/deploy",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/azure",
        destination: "/admin/deploy/kubernetes",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/configure",
        destination: "/admin/deploy/kubernetes/configure",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/eks",
        destination: "/admin/deploy/kubernetes/eks",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/helm",
        destination: "/admin/deploy/kubernetes/helm",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes",
        destination: "/admin/deploy/kubernetes",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/kustomize",
        destination: "/admin/deploy/kubernetes/kustomize",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/operations",
        destination: "/admin/deploy/kubernetes/operations",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/scale",
        destination: "/admin/deploy/kubernetes/scale",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/troubleshoot",
        destination: "/admin/deploy/kubernetes/troubleshoot",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/update",
        destination: "/admin/deploy/kubernetes/update",
        permanent: true
    },
    {
        source: "/admin/install/kubernetes/overlays",
        destination: "/admin/deploy/kubernetes/configure",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/aws",
        destination: "/admin/deploy/docker-compose/aws",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/digitalocean",
        destination: "/admin/deploy/docker-compose/digitalocean",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/google_cloud",
        destination: "/admin/deploy/docker-compose/google_cloud",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose",
        destination: "/admin/deploy/docker-compose",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/migrate",
        destination: "/admin/deploy/docker-compose/migrate",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/operations",
        destination: "/admin/deploy/docker-compose#operations",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/update",
        destination: "/admin/deploy/docker-compose#upgrade",
        permanent: true
    },
    {
        source: "/admin/install/docker-compose/configure",
        destination: "/admin/deploy/docker-compose#configure",
        permanent: true
    },
    {
        source: "/admin/install/docker/aws",
        destination: "/admin/deploy/docker-single-container/aws",
        permanent: true
    },
    {
        source: "/admin/install/docker/digitalocean",
        destination: "/admin/deploy/docker-single-container/digitalocean",
        permanent: true
    },
    {
        source: "/admin/install/docker/google_cloud",
        destination: "/admin/deploy/docker-single-container/google_cloud",
        permanent: true
    },
    {
        source: "/admin/install/docker",
        destination: "/admin/deploy/docker-single-container",
        permanent: true
    },
    {
        source: "/admin/install/managed",
        destination: "/admin/deploy/managed",
        permanent: true
    },
    {
        source: "/admin/install/migrate-backup",
        destination: "/admin/deploy/migrate-backup",
        permanent: true
    },
    {
        source: "/admin/install/resource_estimator",
        destination: "/admin/deploy/resource_estimator",
        permanent: true
    },
    {
        source: "/admin/install/cluster.md",
        destination: "/admin/deploy",
        permanent: true
    },
    {
        source: "/admin/deploy/cluster",
        destination: "/admin/deploy",
        permanent: true
    },
    {
        source: "/admin/deploy/docker",
        destination: "/admin/deploy/docker-single-container",
        permanent: true
    },
    {
        source: "/admin/observability/alert_solutions",
        destination: "/admin/observability/alerts",
        permanent: true
    },
    {
        source: "/admin/deploy/managed",
        destination: "/cloud",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/writing_an_indexer",
        destination: "/code_navigation/explanations/writing_an_indexer",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/auto_indexing_inference",
        destination: "/code_navigation/explanations/auto_indexing_inference",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/auto_indexing",
        destination: "/code_navigation/explanations/auto_indexing",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/features",
        destination: "/code_navigation/explanations/features",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/introduction_to_code_intelligence",
        destination: "/code_navigation/explanations/introduction_to_code_navigation",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/precise_code_intelligence",
        destination: "/code_navigation/explanations/precise_code_navigation",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/rockskip",
        destination: "/code_navigation/explanations/rockskip",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/search_based_code_intelligence",
        destination: "/code_navigation/explanations/search_based_code_navigation",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/uploads",
        destination: "/code_navigation/explanations/uploads",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations",
        destination: "/code_navigation/explanations",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/diagrams",
        destination: "/code_navigation/explanations/diagrams",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/diagrams/index-states.mermaid",
        destination: "/code_navigation/explanations/diagrams/index-states.mermaid",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/diagrams/index-states.svg",
        destination: "/code_navigation/explanations/diagrams/index-states.svg",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/diagrams/upload-states.mermaid",
        destination: "/code_navigation/explanations/diagrams/upload-states.mermaid",
        permanent: true
    },
    {
        source: "/code_intelligence/explanations/diagrams/upload-states.svg",
        destination: "/code_navigation/explanations/diagrams/upload-states.svg",
        permanent: true
    },
    {
        source: "/code_intelligence/apidocs",
        destination: "/code_navigation/apidocs",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/adding_lsif_to_many_repos",
        destination: "/code_navigation/how-to/adding_lsif_to_many_repos",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/adding_lsif_to_workflows",
        destination: "/code_navigation/how-to/adding_lsif_to_workflows",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/configure_auto_indexing",
        destination: "/code_navigation/how-to/configure_auto_indexing",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/configure_data_retention",
        destination: "/code_navigation/how-to/configure_data_retention",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/enable_auto_indexing",
        destination: "/code_navigation/how-to/enable_auto_indexing",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/index_a_cpp_repository",
        destination: "https://sourcegraph.com/github.com/sourcegraph/scip-clang/-/blob/README.md#usage",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/index_a_go_repository",
        destination: "/code_navigation/how-to/index_a_go_repository",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/index_a_typescript_and_javascript_repository",
        destination: "/code_navigation/how-to/index_a_typescript_and_javascript_repository",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/index_other_languages",
        destination: "/code_navigation/how-to/index_other_languages",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to",
        destination: "/code_navigation/how-to",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/CodeReview.gif",
        destination: "/code_navigation/how-to/img/CodeReview.gif",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/experimental-language-server-enable.png",
        destination: "/code_navigation/how-to/img/experimental-language-server-enable.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/extension-example.gif",
        destination: "/code_navigation/how-to/img/extension-example.gif",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/network-description.png",
        destination: "/code_navigation/how-to/img/network-description.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/network-waterfall.png",
        destination: "/code_navigation/how-to/img/network-waterfall.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/popover.png",
        destination: "/code_navigation/how-to/img/popover.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/Symbols.png",
        destination: "/code_navigation/how-to/img/Symbols.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/SymbolSidebar.png",
        destination: "/code_navigation/how-to/imgSymbolSidebar.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img/workflow.png",
        destination: "/code_navigation/how-to/img/workflow.png",
        permanent: true
    },
    {
        source: "/code_intelligence/how-to/img",
        destination: "/code_navigation/how-to/img",
        permanent: true
    },
    {
        source: "/code_intelligence/references/auto_indexing_configuration",
        destination: "/code_navigation/references/auto_indexing_configuration",
        permanent: true
    },
    {
        source: "/code_intelligence/references/envvars",
        destination: "/code_navigation/references/envvars",
        permanent: true
    },
    {
        source: "/code_intelligence/references/faq",
        destination: "/code_navigation/references/faq",
        permanent: true
    },
    {
        source: "/code_intelligence/references/indexers",
        destination: "/code_navigation/references/indexers",
        permanent: true
    },
    {
        source: "/code_intelligence/references/precise_examples",
        destination: "/code_navigation/references/precise_examples",
        permanent: true
    },
    {
        source: "/code_intelligence/references/requirements",
        destination: "/code_navigation/references/requirements",
        permanent: true
    },
    {
        source: "/code_intelligence/references/troubleshooting",
        destination: "/code_navigation/references/troubleshooting",
        permanent: true
    },
    {
        source: "/code_intelligence/references",
        destination: "/code_navigation/references",
        permanent: true
    },
    {
        source: "/code_intelligence",
        destination: "/code_navigation",
        permanent: true
    },
    {
        source: "/cody/autocomplete",
        destination: "/cody/capabilities#code-autocomplete",
        permanent: true
    },
    {
        source: "/cody/autocomplete#code-autocomplete",
        destination: "/cody/capabilities#code-autocomplete",
        permanent: true
    },
    {
        source: "/cody/autocomplete#what-is-cody-code-autocomplete",
        destination: "/cody/capabilities#code-autocomplete",
        permanent: true
    },
    {
        source: "/cody/autocomplete#enabling-autocomplete",
        destination: "/cody/capabilities#code-autocomplete",
        permanent: true
    },
    {
        source: "/cody/autocomplete#configuring-on-sourcegraph-enterprise",
        destination: "/cody/capabilities#configure-autocomplete-on-sourcegraph-enterprise",
        permanent: true
    },
    {
        source: "/cody/autocomplete#accessing-autocomplete-logs",
        destination: "/cody/capabilities#access-autocomplete-logs",
        permanent: true
    },
    {
        source: "/cody#get-cody",
        destination: "/cody#getting-started",
        permanent: true
    },
    {
        source: "/cody#features",
        destination: "/cody#main-features",
        permanent: true
    },
    {
        source: "/cody#chatbot-that-knows-your-code",
        destination: "/cody/capabilities#code-chatbot",
        permanent: true
    },
    {
        source: "/cody#fix-code-inline",
        destination: "/cody/capabilities#fix-code-inline",
        permanent: true
    },
    {
        source: "/cody#recipes",
        destination: "/cody/capabilities#cody-recipes",
        permanent: true
    },
    {
        source: "/cody#autocomplete",
        destination: "/cody/capabilities#code-autocomplete",
        permanent: true
    },
    {
        source: "/cody/overview",
        destination: "/cody/",
        permanent: true
    },
    {
        source: "/cody/explanations/installing_vs_code",
        destination: "/cody/cody-clients/install-vscode",
        permanent: true
    },
    {
        source: "/cody/overview/install-vscode",
        destination: "/cody/cody-clients/install-vscode",
        permanent: true
    },
    {
        source: "/cody/explanations/installing_jetbrains",
        destination: "/cody/cody-clients/install-jetbrains",
        permanent: true
    },
    {
        source: "/cody/overview/install-jetbrains",
        destination: "/cody/cody-clients/install-jetbrains",
        permanent: true
    },
    {
        source: "/app",
        destination: "/cody/overview/app",
        permanent: true
    },
    {
        source: "/cody/explanations/enabling_cody",
        destination: "/cody/overview/cody-with-sourcegraph",
        permanent: true
    },
    {
        source: "/cody/explanations/enabling_cody_enterprise",
        destination: "/cody/overview/enable-cody-enterprise",
        permanent: true
    },
    {
        source: "/cody/quickstart#quickstart-for-cody-in-vs-code",
        destination: "/cody/quickstart#cody-quickstart",
        permanent: true
    },
    {
        source: "/cody/quickstart#introduction",
        destination: "/cody/quickstart#cody-quickstart",
        permanent: true
    },
    {
        source: "/cody/quickstart#getting-started-with-the-cody-extension-and-recipes",
        destination: "/cody/quickstart#getting-started-with-cody-extension-and-commands",
        permanent: true
    },
    {
        source: "/cody/quickstart#generate-a-unit-test",
        destination: "/cody/quickstart#1-generate-a-unit-test",
        permanent: true
    },
    {
        source: "/cody/quickstart#ask-cody-to-pull-reference-documentation",
        destination: "/cody/quickstart#3-ask-cody-to-pull-reference-documentation",
        permanent: true
    },
    {
        source: "/cody/quickstart#ask-cody-to-write-context-aware-code",
        destination: "/cody/quickstart#working-with-the-cody-extension",
        permanent: true
    },
    {
        source: "/cody/overview/install-jetbrains#introduction",
        destination: "/cody/overview/install-jetbrains",
        permanent: true
    },
    {
        source: "/cody/overview/install-jetbrains#requirements",
        destination: "/cody/overview/install-jetbrains#prerequisites",
        permanent: true
    },
    {
        source: "/cody/overview/install-jetbrains#optional-enable-code-graph-context-for-context-aware-answers",
        destination: "/cody/overview/install-jetbrains#enable-code-graph-context-for-context-aware-answers-optional",
        permanent: true
    },
    {
        source: "/cody/overview/install-jetbrains#get-started-with-cody",
        destination: "/cody/overview/install-jetbrains",
        permanent: true
    },
    {
        source: "/cody/overview/install-vscode#introduction",
        destination: "/cody/overview/install-vscode",
        permanent: true
    },
    {
        source: "/cody/overview/install-vscode#requirements",
        destination: "/cody/overview/install-vscode#prerequisites",
        permanent: true
    },
    {
        source: "/cody/overview/install-vscode#optional-enable-code-graph-context-for-context-aware-answers",
        destination: "/cody/overview/install-vscode#enable-code-graph-context-for-context-aware-answers-optional",
        permanent: true
    },
    {
        source: "/cody/overview/enable-cody-enterprise#using-a-third-party-llm-provider-directly",
        destination: "/cody/overview/enable-cody-enterprise#using-a-third-party-llm-provider",
        permanent: true
    },
    {
        source: "/cody/overview/enable-cody-enterprise#turning-cody-on-only-for-some-users",
        destination: "/cody/overview/enable-cody-enterprise#enable-cody-only-for-some-users",
        permanent: true
    },
    {
        source: "/cody/overview/enable-cody-enterprise#turning-cody-off",
        destination: "/cody/overview/enable-cody-enterprise#disable-cody",
        permanent: true
    },
    {
        source: "/cody/explanations",
        destination: "/cody/core-concepts",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#embeddings",
        destination: "/cody/core-concepts/embeddings#embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#configuring-embeddings",
        destination: "/cody/core-concepts/embeddings/configure-embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#filtering-files-from-embeddings",
        destination: "/cody/core-concepts/embeddings/manage-embeddings#filter-files-from-embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#storing-embedding-indexes",
        destination: "/cody/core-concepts/embeddings/manage-embeddings#store-embedding-indexes",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#using-s3",
        destination: "/cody/core-concepts/embeddings/manage-embeddings#using-s3",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#using-gcs",
        destination: "/cody/core-concepts/embeddings/manage-embeddings#using-gcs",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#provisioning-buckets",
        destination: "/cody/core-concepts/embeddings/manage-embeddings#provisioning-buckets",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#environment-variables-for-the-embeddings-service",
        destination: "cody/core-concepts/embeddings/manage-embeddings#environment-variables-for-the-embeddings-service",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#incremental-embeddings",
        destination: "/cody/core-concepts/embeddings#incremental-embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#adjust-the-minimum-time-interval-between-automatically-scheduled-embeddings",
        destination: "/cody/core-concepts/embeddings#minimum-time-interval-between-automatically-scheduled-embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#using-a-third-party-embeddings-provider-directly",
        destination: "/cody/core-concepts/embeddings#third-party-embeddings-provider",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#openai",
        destination: "/cody/core-concepts/embeddings#openai",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#azure-openai-span-class-badge-badge-experimental-experimental-span",
        destination: "/cody/core-concepts/embeddings#azure-openai",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#disabling-embeddings",
        destination: "/cody/core-concepts/embeddings#disable-embeddings",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#configuring-the-global-policy-match-limit",
        destination: "/cody/core-concepts/embeddings/usage-and-limits#configure-global-policy-match-limit",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context#limitting-the-number-of-embeddings-that-can-be-generated",
        destination: "/cody/core-concepts/embeddings/usage-and-limits#limit-the-number-of-embeddings-that-can-be-generated",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing",
        destination: "/cody/core-concepts/embeddings/embedding-index",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#generate-embeddings-index",
        destination: "/cody/core-concepts/embeddings/embedding-index#generate-embeddings-index",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#sourcegraph-enterprise",
        destination: "/cody/core-concepts/embeddings/embedding-index#sourcegraph-enterprise",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#sourcegraph-com",
        destination: "/cody/core-concepts/embeddings/embedding-index#sourcegraph-com",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#enable-codebase-aware-answers",
        destination: "/cody/core-concepts/embeddings/embedding-index#enable-codebase-aware-answers",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#extension-settings",
        destination: "/cody/core-concepts/embeddings/embedding-index#cody-vs-code-extension-settings",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#manual-configuration",
        destination: "/cody/core-concepts/embeddings/embedding-index#manual-configuration",
        permanent: true
    },
    {
        source: "/cody/explanations/indexing#settings-json",
        destination: "/cody/core-concepts/embeddings/embedding-index#settings-json",
        permanent: true
    },
    {
        source: "/cody/explanations/policies",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#policies",
        permanent: true
    },
    {
        source: "/cody/explanations/policies#how-to-create-an-embeddings-policy",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#create-an-embeddings-policy",
        permanent: true
    },
    {
        source: "/cody/explanations/policies#example-1",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#how-pattern-matching-works",
        permanent: true
    },
    {
        source: "/cody/explanations/policies#example-2",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#how-pattern-matching-works",
        permanent: true
    },
    {
        source: "/cody/explanations/policies#example-3",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#how-pattern-matching-works",
        permanent: true
    },
    {
        source: "/cody/explanations/policies#lifecycle-of-an-embeddings-policy",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#lifecycle-of-an-embeddings-policy",
        permanent: true
    },
    {
        source: "/cody/explanations/schedule_one_off_embeddings_jobs",
        destination: "/cody/core-concepts/embeddings/configure-embeddings#schedule-embeddings-jobs",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context",
        destination: "/cody/core-concepts/code_graph_context",
        permanent: true
    },
    {
        source: "/cody/explanations/cody_gateway",
        destination: "/cody/core-concepts/cody_gateway",
        permanent: true
    },
    {
        source: "/cody/explanations/code_graph_context",
        destination: "/cody/core-concepts/code-graph",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_clients",
        destination: "/cody/overview#getting-started",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_gateway",
        destination: "/cody/core-concepts/cody-gateway",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_gateway#using-cody-gateway-in-sourcegraph-enterprise",
        destination: "/cody/core-concepts/cody-gateway#using-cody-gateway-in-sourcegraph-enterprise",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_gateway#configuring-custom-models",
        destination: "/cody/core-concepts/cody-gateway#configuring-custom-models",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_gateway#rate-limits-and-quotas",
        destination: "/cody/core-concepts/cody-gateway#rate-limits-and-quotas",
        permanent: true
    },
    {
        source: "/cody/core-concepts/cody_gateway#privacy-and-security",
        destination: "/cody/core-concepts/cody-gateway#privacy-and-security",
        permanent: true
    },
    {
        source: "/cody/custom-commands",
        destination: "/cody/capabilities/commands#custom-commands",
        permanent: true
    },
];

const updatedRedirectsData = redirectsData.map(redirect => {
    return {
        source: String(redirect.source).replace("http://localhost:3000/docs", ""),
        destination: String(redirect.destination).replace("http://localhost:3000/docs", ""),
        permanent: redirect.permanent
    };
});


module.exports = {
    updatedRedirectsData,
};
