function downloadMaterial(filename) {
    const link = document.createElement('a');
    link.href = `materials/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
