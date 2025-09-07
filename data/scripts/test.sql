SELECT url, title, snippet(pages, 2, '<b>', '</b>', '...', 10)
FROM pages
WHERE pages MATCH 'matematicas';