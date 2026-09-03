export class Reloj {
  constructor() {
    this.$ = (selector) => document.querySelector(selector);
    this.$hora    = this.$("#hora");
    this.$minuto  = this.$("#minuto");
    this.$segundo = this.$("#segundo");
  }

  // Pinta la hora actual formateada como HH:MM:SS
  actualizar() {
    const ahora = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    this.$hora.textContent    = pad(ahora.getHours());
    this.$minuto.textContent  = pad(ahora.getMinutes());
    this.$segundo.textContent = pad(ahora.getSeconds());
  }

  // Arranca: pinta de inmediato y se refresca cada segundo
  comenzar() {
    this.actualizar();
    setInterval(() => this.actualizar(), 1000);
  }
}