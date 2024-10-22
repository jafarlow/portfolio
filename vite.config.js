export default {
  build: {
    outDir: 'dist',
    
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'pages/about.html',
        projects: 'pages/projects.html',
        tech: 'pages/tech.html',
        testimonials: 'pages/testimonials.html'
      }
    }
  }
}