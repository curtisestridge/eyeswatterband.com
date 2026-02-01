import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'

// Plugin to transform markdown files with frontmatter into JS modules
function markdownPlugin() {
  return {
    name: 'markdown-frontmatter',
    transform(code, id) {
      if (id.endsWith('.md')) {
        const { data, content } = matter(code)
        return {
          code: `export const frontmatter = ${JSON.stringify(data)};\nexport const content = ${JSON.stringify(content)};\nexport default { frontmatter, content };`,
          map: null
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [markdownPlugin(), react()],
})
