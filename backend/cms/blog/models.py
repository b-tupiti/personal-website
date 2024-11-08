from django.db import models
from grapple.models import GraphQLString, GraphQLStreamfield

# Add these:
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel


class BlogPage(Page):

    date = models.DateField(blank=True)
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('body'),
    ]

    # add fields to graphQL
    graphql_fields = [
        GraphQLString("date"),
        GraphQLString("body"),
    ]