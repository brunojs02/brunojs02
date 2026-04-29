export async function downloadResumePdf(): Promise<void> {
  const root = document.querySelector<HTMLElement>('.tm-printroot');
  if (!root) return;

  const { default: html2pdf } = await import('html2pdf.js');

  const clone = root.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('.tm-noprint').forEach((el) => el.remove());

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-10000px';
  wrapper.style.top = '0';
  wrapper.style.width = `${root.clientWidth}px`;
  wrapper.style.background = '#0d0e0c';
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  try {
    await html2pdf()
      .set({
        margin: 0,
        filename: 'bruno-santos-resume.pdf',
        html2canvas: { scale: 2, backgroundColor: '#0d0e0c', useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(clone)
      .save();
  } finally {
    wrapper.remove();
  }
}
