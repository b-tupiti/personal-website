from django.db import models
from grapple.models import GraphQLString, GraphQLStreamfield, GraphQLRichText

# Add these:
from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.admin.panels import FieldPanel
from wagtail.images.blocks import ImageChooserBlock
from wagtail.blocks import RichTextBlock, BlockQuoteBlock

class BlogPage(Page):

    date = models.DateField(blank=True)
    body = StreamField([
        ('paragraph', RichTextBlock()),
        ('quote', BlockQuoteBlock(max_length=100, help_text='quote')),
        ('image', ImageChooserBlock(required=False)),
    ])

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('body'),
    ]

    # add fields to graphQL
    graphql_fields = [
        GraphQLString("date"),
        GraphQLStreamfield("body"),
    ]