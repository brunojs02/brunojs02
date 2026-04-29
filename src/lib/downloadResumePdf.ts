export function downloadResumePdf(): void {
  const a = document.createElement('a');
  a.href = '/resume.pdf';
  a.download = 'bruno-santos-resume.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
