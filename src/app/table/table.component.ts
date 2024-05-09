import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionarios } from '../funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  funcionarios: Funcionarios[] = [];

  constructor(private FuncionariosService: FuncionariosService, private router: Router) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.FuncionariosService.getFuncionarioDetails().subscribe((data: Funcionarios[]) => {
      this.funcionarios = data;
    });
  }

  editarFuncionario(id: number) {
    console.log("Editar funcionário com ID:", id);
    this.router.navigate(['/editar', id]);
  }

  excluirFuncionario(id: number) {
    console.log("Excluir funcionário com ID:", id);
    if (confirm("Tem certeza que deseja excluir este funcionário?")) {
      this.FuncionariosService.excluirFuncionario(id).subscribe(() => {
        this.carregarFuncionarios();
      }, (error: any) => {
        console.error('Erro ao excluir funcionário:', error);
      });
    }
  }

  toggleDetalhes(funcionarioId: number) {
    const detalhesRow = document.getElementById('detalhes-' + funcionarioId);
    if (detalhesRow) {
      if (detalhesRow.style.display === 'none' || !detalhesRow.style.display) {
        detalhesRow.style.display = 'table-row';
      } else {
        detalhesRow.style.display = 'none';
      }
    }
  }

}
